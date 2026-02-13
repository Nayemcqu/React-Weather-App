export function Button({size="md",children,...props}){

    const sizes={
sm:"px-4 py-1",
md:"px-8 py-2"
}

return(
<button className={ `ml-4 ${sizes[size]}  border-2 border-blue-300  bg-blue-500 rounded-full cursor-pointer shadow-xl
 hover:bg-blue-400 text-white transition-all focus:outline-none`} {...props}>
{children}
</button>

)

}