import { CustomSectionProps } from '@/types';

const CustomSection = ({
  children,
  id,
  className,
  container = true,
  waveColor
}: CustomSectionProps) => {
  return (
    <section
      id={id}
      className={`
      relative pt-20
      ${className}
    `}
    >
      {/* SVG Divider */}
      <div className="custom-shape-divider-top-1727643063">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            style={{ fill: waveColor }}
          ></path>
        </svg>
      </div>

      <div className={container ? 'container' : ''}>{children}</div>

      <style>{`
        .custom-shape-divider-top-1727643063 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
        }
        .custom-shape-divider-top-1727643063 svg {
          position: relative;
          display: block;
          width: calc(153% + 1.3px);
          height: 130px;
        }
      `}</style>
    </section>
  );
};

export default CustomSection;
