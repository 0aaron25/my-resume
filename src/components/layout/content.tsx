import MotionDiv from "@/components/motion/motion-div";
import MoveText from "@/components/motion/motion-text";
import Emoji from "@/assets/Emoji.mp4";
import EmojiDark from "@/assets/Emoji-dark.mp4";
import { useTheme } from "../theme/theme-provider";

export default function Content() {
  const { theme } = useTheme();

  return (
    <div className="flex items-center flex-col font-bold md:space-y-6 space-y-4">
      <MoveText delayOffset={0}>Hi, I'm Eric Leung! 👋</MoveText>

      <MotionDiv>
        <video
          className="h-40 w-40 md:h-48 md:w-48"
          muted
          autoPlay
          loop
          playsInline
          src={theme === "dark" ? EmojiDark : Emoji}
        >
          Your browser does not support the video tag.
        </video>
      </MotionDiv>

      <MotionDiv delayOffset={0.8} className="md:text-5xl text-2xl">
        <h1> Font-end Developer 🧑🏻‍💻</h1>
      </MotionDiv>

      <MotionDiv delayOffset={1} className="md:text-5xl text-2xl">
        <h1>Photographer 📸</h1>
      </MotionDiv>

      <MotionDiv
        delayOffset={1.2}
        className="md:text-lg text-sm md:!mt-12 font-normal"
      >
        <p>Welcome to my personal page!</p>
      </MotionDiv>

      <MotionDiv
        delayOffset={1.4}
        className="md:text-lg text-sm text-center md:!mt-2 px-4 font-normal"
      >
        <p>
          Just an indie<b> ✨ TypeScript Full-Stack </b>developer who loves to
          build something cool.
        </p>
      </MotionDiv>

      {/* <div className="my-8">
        <ContactList delayOffset={1.45} showWhenInView={false} />
      </div> */}
    </div>
  );
}
