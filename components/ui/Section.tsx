import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    background?: 'default' | 'muted' | 'primary';
}

export const Section = ({
    children,
    className = '',
    background = 'default',
    ...props
}: SectionProps) => {
    const backgrounds = {
        default: "bg-[var(--background)]",
        muted: "bg-[var(--muted)]",
        primary: "bg-[var(--primary)] text-[var(--primary-foreground)]",
    };

    return (
        <section
            className={`py-16 md:py-24 ${backgrounds[background]} ${className}`}
            {...props}
        >
            <div className="container-width">
                {children}
            </div>
        </section>
    );
};
