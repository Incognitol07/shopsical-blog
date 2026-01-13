import { PostFragment } from '../../generated/graphql';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '../../lib/utils';
import { Badge } from './badge';
import { Calendar } from 'lucide-react';
import { format } from 'date-fns';

interface MagazineCardProps {
  post: PostFragment;
  variant?: 'hero' | 'standard' | 'compact';
  className?: string;
}

export const MagazineCard = ({ post, variant = 'standard', className }: MagazineCardProps) => {
  const publishedDate = post.publishedAt ? new Date(post.publishedAt) : new Date();
  
  if (variant === 'hero') {
    return (
      <Link href={`/${post.slug}`} className={cn("group block w-full overflow-hidden rounded-3xl bg-background border border-card-border hover:shadow-xl hover:shadow-primary/5 transition-all duration-300", className)}>
        <div className="grid md:grid-cols-2 gap-0 h-full">
          <div className="relative h-[300px] md:h-full min-h-[400px] overflow-hidden">
            {post.coverImage?.url ? (
              <Image
                src={post.coverImage.url}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
            ) : (
              <div className="absolute inset-0 bg-secondary flex items-center justify-center">
                 <span className="text-4xl">✨</span>
              </div>
            )}
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:hidden" />
          </div>
          
          <div className="p-6 md:p-12 flex flex-col justify-center bg-background">
            <div className="flex items-center gap-3 mb-6">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">
                    Featured
                </Badge>
                {post.tags?.[0] && (
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        {post.tags[0].name}
                    </span>
                )}
            </div>
            
            <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            
            <p className="text-muted-foreground text-lg mb-8 line-clamp-3 leading-relaxed">
              {post.brief}
            </p>
            
            <div className="flex items-center gap-4 mt-auto">
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <Calendar className="w-4 h-4" />
                    <span>{format(publishedDate, 'MMMM d, yyyy')}</span>
                </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'compact') {
    return (
        <Link href={`/${post.slug}`} className={cn("group flex gap-4 items-start rounded-xl hover:bg-accent-1 transition-colors", className)}>
             <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 rounded-lg overflow-hidden bg-accent-1">
                 {post.coverImage?.url ? (
                    <Image
                        src={post.coverImage.url}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                 ) : (
                    <div className="w-full h-full bg-tertiary/20" />
                 )}
             </div>
             
             <div className="flex flex-col gap-2">
                <span className="text-xs font-bold text-primary tracking-wider uppercase">
                    {post.tags?.[0]?.name || 'Story'}
                </span>
                <h4 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                </h4>
                <div className="text-xs text-muted-foreground mt-1">
                     {format(publishedDate, 'MMM d, yyyy')} • {post.readTimeInMinutes} min read
                </div>
             </div>
        </Link>
    );
  }

  // Standard Variant
  return (
    <Link href={`/${post.slug}`} className={cn("group block bg-background overflow-hidden hover:-translate-y-1 transition-transform duration-300", className)}>
        <div className="relative h-64 overflow-hidden rounded-2xl mb-4">
             {post.coverImage?.url ? (
                <Image
                    src={post.coverImage.url}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
             ) : (
                <div className="w-full h-full bg-gold/30" />
             )}
        </div>
        
        <div className="space-y-3">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                <span className="text-primary">{post.tags?.[0]?.name || 'Article'}</span>
                <span>•</span>
                 <span>{format(publishedDate, 'MMM d, yyyy')}</span>
            </div>
            
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                {post.title}
            </h3>
            
            <p className="text-muted-foreground text-sm line-clamp-2">
                {post.brief}
            </p>
        </div>
    </Link>
  );
};
