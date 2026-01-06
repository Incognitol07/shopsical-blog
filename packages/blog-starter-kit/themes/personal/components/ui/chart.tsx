"use client";

import type * as React from "react";

export const Chart = () => {
  return null;
};

export const ChartContainer = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={className}>{children}</div>;
};

export const ChartTooltip = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export const ChartTooltipContent = () => {
  return null;
};

export const ChartGrid = ({ x }: { x?: boolean }) => {
  return null;
};

export const ChartLine = ({
  curve,
  strokeWidth,
  className,
}: {
  curve?: string;
  strokeWidth?: number;
  className?: string;
}) => {
  return null;
};

export const ChartXAxis = () => {
  return null;
};

export const ChartYAxis = () => {
  return null;
};

export const ChartPie = ({ innerRadius }: { innerRadius?: number }) => {
  return null;
};

export const ChartLegend = ({ position }: { position?: string }) => {
  return null;
};

export const ChartBar = ({ className }: { className?: string }) => {
  return null;
};
