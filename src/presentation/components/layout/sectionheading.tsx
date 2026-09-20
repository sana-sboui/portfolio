interface Props {
    eyebrow: string;
    title: string;
    className?: string;
}

export function SectionHeading({ eyebrow, title, className = "" }: Props) {
    return (
        <div className={className}>
            <p className="text-sm font-bold uppercase tracking-[.18em] text-[var(--primary)]">{eyebrow}</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">{title}</h2>
        </div>
    );
}