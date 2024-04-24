interface MemberModalProps {
  users: string[];
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export default function MemberModal({ users, onClick }: MemberModalProps) {
  return (
    <div
      className="left-3/5 absolute top-36 flex w-[280px] flex-col overflow-hidden rounded-xl bg-white px-5 py-9"
      onClick={onClick}
    >
      <div className="flex flex-row justify-between">
        <div className="flex items-center text-lg font-bold">참여 멤버</div>
        <div className="flex items-center gap-[10px] text-lg font-semibold">
          총 {users.length}명
        </div>
      </div>
      <div className="mt-[29px] flex flex-col">
        {users.map((name, index) => (
          <div
            key={index}
            className="mt-7 flex w-full flex-row items-center text-base"
          >
            <span className="font-bold">{index + 1}번째</span>
            <div className="ml-auto">{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
