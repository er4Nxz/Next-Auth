import { useFormStatus } from "react-dom";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <>
      <button type="submit" className="btn btn-primary" disabled={pending}>
        submit
        {pending && (
          <div className="spinner-border spinner-border-sm mx-2"></div>
        )}
      </button>
    </>
  );
};

export default SubmitBtn;
