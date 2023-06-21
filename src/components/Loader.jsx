import { Html,useProgress } from "@react-three/drei"

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-load"></span>
      <p className="text-[24px] mt-10 text-[#31f1779b]  font-bold">
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default Loader