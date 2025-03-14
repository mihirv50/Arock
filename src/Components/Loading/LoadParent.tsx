import LoadChild from "./LoadChild"


const LoadParent = () => {
  return (
    <div className="h-0.5 w-full bg-transparent fixed rounded z-50">
        <LoadChild/>
    </div>
  )
}

export default LoadParent