export default function Modal({
  open,
  onClose,
  children,
  bgcolor,
}: {
  open: boolean;
  bgcolor: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 flex justify-center items-center transition-colors bg-[#00000050] backdrop-blur-sm z-40
           ${open ? "visible" : "invisible"}
          `}
      >
        {/* modal */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`
              ${bgcolor} rounded-md shadow p-3 duration-500
              ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
            `}
        >
          <button
            onClick={onClose}
            className="z-10 absolute flex items-center justify-center -top-4 -right-4 h-8 w-8 rounded-full text-white bg-yl-10 hover:bg-yl-30 hover:scale-110 transition-all"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 17 }}
            >
              close
            </span>
          </button>
          {children}
        </div>
      </div>
    </>
  );
}
