interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function ProcessStep({
  step,
  title,
  description,
  icon,
}: ProcessStepProps) {
  return (
    <div className="relative flex gap-5">
      {/* Vertical line + step number circle */}
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/15 border-2 border-primary text-primary font-bold text-sm shrink-0 z-10">
          {step}
        </div>
        {/* Connecting line */}
        <div className="w-0.5 flex-1 bg-border/50 mt-2" />
      </div>

      {/* Content */}
      <div className="pb-10">
        <div className="flex items-center gap-2 mb-1.5">
          {icon && (
            <span className="text-primary">{icon}</span>
          )}
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
