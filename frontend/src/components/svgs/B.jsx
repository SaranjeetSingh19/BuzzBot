 

const BSvg = (props) => (
   <svg aria-hidden="true" viewBox="0 0 200 200" {...props}>
    <rect width="200" height="200" fill="black" />
    <path
      d="M60,30 L60,170 L110,170 Q130,170 140,160 Q150,150 150,130 Q150,110 140,100 Q150,90 150,70 Q150,50 140,40 Q130,30 110,30 Z 
         M90,50 L110,50 Q120,50 125,55 Q130,60 130,70 Q130,80 125,85 Q120,90 110,90 L90,90 Z 
         M90,110 L110,110 Q120,110 125,115 Q130,120 130,130 Q130,140 125,145 Q120,150 110,150 L90,150 Z"
      fill="none" stroke="white" strokeWidth="5"
    />
    <circle cx="170" cy="170" r="15" fill="none" stroke="white" strokeWidth="3" />
    <path d="M167,167 A3,3 0 1,1 173,173 A3,3 0 1,1 167,167" fill="none" stroke="white" strokeWidth="3" />
  </svg>

);
export default BSvg;

 