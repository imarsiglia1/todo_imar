interface CheckProps {
  checked?: boolean;
  onPress: () => void;
  classname?: string | undefined;
}
const CustomCheckbox = ({
  checked = false,
  onPress,
  classname,
}: CheckProps) => {
  return (
    <a className={`switch ${classname}`} onClick={onPress}>
      <input type="checkbox" checked={checked} />
      <span className="slider round"></span>
    </a>
  );
};

export default CustomCheckbox;
