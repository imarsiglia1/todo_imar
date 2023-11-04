import "./general.css";

interface EmptyMessageProps {
  message: string;
}

const EmptyMessage = ({ message }: EmptyMessageProps) => {
  return (
    <>
      <div className="empty_message_container">
        <label className="empty_message">{message}</label>
      </div>
    </>
  );
};

export default EmptyMessage;
