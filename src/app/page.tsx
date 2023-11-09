import { Landing } from "../components/Landing";

type Props = {};

function LandingPage({}: Props) {
  return (
    <div className="flex items-center justify-center h-[100%] w-[100%]">
      <Landing />
    </div>
  );
}

export default LandingPage;
