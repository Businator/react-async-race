import styles from './CarImg.module.css';

export const CarImg = () => {
  return (
    <div className={styles.container}>
      <svg width="365" height="185">
        <rect
          x="70"
          y="10"
          width="220"
          height="130"
          fill="transparent"
          rx="150"
          stroke="crimson"
          strokeWidth="10"
        />

        <rect x="10" y="70" width="340" height="80" fill="crimson" rx="30" />

        <g>
          <line
            x1="145"
            y1="10"
            x2="145"
            y2="80"
            stroke="crimson"
            strokeWidth="10"
          />

          <line
            x1="215"
            y1="10"
            x2="215"
            y2="80"
            stroke="crimson"
            strokeWidth="10"
          />
        </g>

        <g>
          <rect x="0" y="110" width="40" height="20" fill="#999" rx="10" />

          <rect x="325" y="110" width="40" height="20" fill="#999" rx="10" />
        </g>

        <g>
          <circle
            r="40px"
            fill="#222"
            stroke="white"
            strokeWidth="7"
            cx="90"
            cy="140"
          />
          <circle r="15px" fill="#555" cx="90" cy="140" />
        </g>

        <g>
          <circle
            r="40px"
            fill="#222"
            stroke="white"
            strokeWidth="7"
            cx="270"
            cy="140"
          />
          <circle r="15px" fill="#555" cx="270" cy="140" />
        </g>

        <g>
          <circle r="15px" fill="gold" cx="340" cy="90" />

          <circle r="10px" fill="orange" cx="15" cy="90" />
        </g>
      </svg>
    </div>
  );
};
