'use client';
import {TabMenu} from "primereact/tabmenu";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import Link from "next/link";

export default function PageNav() {

    let activeIndex;

    const items : any = [
        {label: <Link href={'/'}>Home</Link>, icon: 'pi pi-fw pi-home'},
        {label: <Link href={'/components/client'}>Client Component</Link>, icon: 'pi pi-spin pi-cog'},
        {label: <Link href={'/components/data'}>Data Component</Link>, icon: 'pi pi-folder'}
    ];

    const handleChange = (event: any) => {
        activeIndex = event.index;
    };

    return (
        <>
            <div className="card">
                <nav>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/components/client'}>Client Component</Link>
                    <Link href={'/components/data'}>Data Component</Link>
                </nav>
                <TabMenu model={items}  activeIndex={activeIndex} onTabChange={(e) => {
                    handleChange(e)
                }}/>
            </div>
        </>
    );
}
