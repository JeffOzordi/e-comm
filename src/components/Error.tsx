
interface Props {
  message: string;
}

const Error = ({ message }: Props) => {
  return (
    <div className="text-red-400 bg-red-200 rounded border-red-400 px-3 py-2 border-2 flex justify-center w-auto">
      {message}
    </div>
  );
};

export default Error;
