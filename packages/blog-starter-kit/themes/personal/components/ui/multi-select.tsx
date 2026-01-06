"use client";

import * as React from "react";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export interface MultiSelectProps {
  placeholder?: string;
  className?: string;
  children: React.ReactNode;
  value?: string[];
  onChange?: (value: string[]) => void;
}

export interface MultiSelectItemProps {
  value: string;
  children: React.ReactNode;
}

export function MultiSelect({
  placeholder,
  className,
  children,
  value,
  onChange,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string[]>(value || []);

  // Sync internal state with external value
  React.useEffect(() => {
    if (value !== undefined) {
      setSelected(value);
    }
  }, [value]);

  const options = React.Children.toArray(
    children
  ) as React.ReactElement<MultiSelectItemProps>[];

  const handleSelect = (value: string) => {
    const newSelected = selected.includes(value)
      ? selected.filter((item) => item !== value)
      : [...selected, value];

    setSelected(newSelected);
    onChange?.(newSelected);
  };

  const handleRemove = (value: string) => {
    const newSelected = selected.filter((item) => item !== value);
    setSelected(newSelected);
    onChange?.(newSelected);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          className={cn(
            "flex min-h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
        >
          {selected.length > 0 ? (
            <div className="flex flex-wrap gap-1">
              {selected.map((value) => (
                <Badge
                  key={value}
                  variant="secondary"
                  className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300"
                >
                  {value}
                  <button
                    className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleRemove(value);
                      }
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onClick={() => handleRemove(value)}
                  >
                    <X className="h-3 w-3 text-zinc-400 hover:text-zinc-200" />
                  </button>
                </Badge>
              ))}
            </div>
          ) : (
            <span className="text-muted-foreground">{placeholder}</span>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 bg-zinc-900 border-zinc-800">
        <Command className="bg-transparent">
          <CommandInput placeholder="Search..." className="text-zinc-300" />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                const value = option.props.value;
                const isSelected = selected.includes(value);
                return (
                  <CommandItem
                    key={value}
                    value={value}
                    onSelect={handleSelect}
                    className={cn(
                      "cursor-pointer text-zinc-300",
                      isSelected && "bg-zinc-800"
                    )}
                  >
                    <div
                      className={cn(
                        "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-zinc-700",
                        isSelected
                          ? "bg-primary border-primary text-white"
                          : "opacity-50"
                      )}
                    >
                      {isSelected && <span>✓</span>}
                    </div>
                    {option.props.children}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export function MultiSelectItem({ value, children }: MultiSelectItemProps) {
  return <>{children}</>;
}
