import React from "react";
import { motion } from "framer-motion";

const Logo = ({ height = 35 }: React.ComponentProps<"svg">) => {
  return (
    <svg height={height} viewBox="0 0 218.000000 74.000000">
      <motion.path
        transform="translate(0.000000,72.000000) scale(0.1,-0.1)"
        strokeWidth="28"
        className="fill-transparent stroke-on-background"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        d="M1276 714 c-21 -21 -20 -57 2 -77 24 -22 55 -21 75 1 34 37 11 92
-38 92 -13 0 -31 -7 -39 -16z"
      />

      <motion.path
        transform="translate(0.000000,72.000000) scale(0.1,-0.1)"
        strokeWidth="28"
        className="fill-transparent stroke-on-background"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        d="M596 589 c-31 -24 -36 -81 -10 -117 14 -21 12 -28 -40 -135 -30 -61
-74 -134 -97 -160 -85 -98 -198 -134 -275 -86 -33 20 -74 68 -74 87 0 5 26 13
57 17 73 9 155 39 194 72 141 119 10 315 -176 263 -60 -17 -129 -79 -151 -135
-26 -69 -16 -185 21 -254 35 -63 90 -113 144 -129 100 -31 187 1 291 107 65
66 82 92 130 194 l55 117 82 0 c54 0 84 -4 89 -12 5 -7 11 -78 14 -158 6 -121
10 -152 28 -187 38 -74 106 -92 190 -49 60 31 109 82 165 173 l44 73 7 -63
c10 -90 33 -153 67 -182 54 -45 120 -26 200 56 27 28 51 50 53 48 1 -2 13 -19
25 -36 12 -18 43 -45 69 -60 41 -24 58 -28 127 -28 69 0 89 4 148 32 115 55
219 170 187 208 -21 25 -36 17 -73 -34 -63 -87 -163 -141 -264 -141 -103 0
-158 53 -178 173 -13 80 38 178 112 216 59 30 132 0 160 -66 11 -26 19 -34 36
-31 32 4 34 54 5 98 -28 42 -99 80 -148 80 -51 0 -134 -44 -171 -92 -41 -52
-58 -100 -59 -170 0 -50 -4 -62 -39 -105 -52 -66 -98 -103 -127 -103 -42 0
-55 51 -68 265 l-11 190 -25 0 c-23 0 -26 -5 -31 -55 -8 -68 -18 -95 -77 -195
-82 -143 -146 -205 -209 -205 -56 0 -66 24 -76 188 -12 214 -30 242 -159 242
l-68 0 0 38 c0 40 -23 72 -52 72 -8 0 -27 -9 -42 -21z m-274 -149 c25 -30 23
-85 -3 -111 -34 -34 -104 -60 -179 -66 l-70 -6 0 34 c1 42 22 104 45 129 49
54 169 66 207 20z"
      />
    </svg>
  );
};

export default Logo;
