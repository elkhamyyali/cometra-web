// cStyle => custom styles

type TabsIconPops_TP = {
  color?: string
  cStyle?: string
}
export const TabsIcon = ({
  color = "fill-mainGreen",
  cStyle,
}: TabsIconPops_TP) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cStyle}
  >
    <path
      d="M16.9453 16.9453H6.71414V6.71414H16.9453V16.9453ZM3.88441 14.1156V3.88441H14.1156V5.6591H6.1868C5.89535 5.6591 5.65945 5.89535 5.65945 6.18645V14.1156H3.88441ZM1.05469 11.2859V1.05469H11.2859V2.82972H3.35707C3.06562 2.82972 2.82973 3.06562 2.82973 3.35707V11.2859H1.05469ZM17.4727 5.6591H15.1703V3.35707C15.1703 3.06562 14.9344 2.82972 14.6429 2.82972H12.3405V0.527342C12.3405 0.235896 12.1046 0 11.8132 0H0.527344C0.235898 0 0 0.235896 0 0.527342V11.8132C0 12.1046 0.235898 12.3405 0.527344 12.3405H2.82973V14.6429C2.82973 14.9344 3.06562 15.1703 3.35707 15.1703H5.65945V17.4727C5.65945 17.7637 5.89535 18 6.1868 18H17.4727C17.7641 18 18 17.7637 18 17.4727V6.18645C18 5.89535 17.7641 5.6591 17.4727 5.6591Z"
      className={color}
    />
  </svg>
)