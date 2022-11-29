interface Props  {
  bgColor:string;
  color:string;
  hover?:string;
  children?:React.ReactNode;
}

const Button:React.FC<Props> = ({bgColor,color,hover,children}) => {
  return (
    <button className={`flex gap-2 min-w-max items-center justify-center py-2 px-4   ${bgColor} ${color} ${hover} text-sm rounded-md`} >
      {children}
    </button>
  );
};

export default Button;
