import SideButton from "./SideButton";

export default function Header(){

return(
<header className="w-full h-12 bg-zinc-600 flex justify-between pr-5 pl-5 items-center">
    <SideButton/>
    <div className="w-fit font-bold text-orange-500 font-sans text-xl text-nowrap">مطعم دجاج مقلي</div>
    <input type="search" className="w-44 h-8 pr-2 outline-none rounded-xl" placeholder="البحث ..." />
</header>
)
}