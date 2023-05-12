import "server-only";
import {getStaticProps, testFetchGetData} from "@/app/api/serviceApi";
import styles from "@/app/page.module.css";
import Image from 'next/image'
import React from "react";

export default async function Page() {
    let dataPromise: any;
//axios
    dataPromise = await getStaticProps();

//new fetch
    const dataTest = await testFetchGetData();

    console.log('DataPromise: ');
    console.log(dataPromise);
    console.log('DataTest: ');
    console.log(dataTest)

    return (
        <main className={styles.main}>
            <div className="image-container">
                <Image
                    style={{objectFit: "cover"}} //Cover (cropped to fit) or Contain (full image)
                    fill={true}
                    src="https://wallpapers.com/images/featured/oaax18kaapkokaro.jpg"
                    alt="COVER"
                    unoptimized={true} //When true, the source image will be served as-is instead of changing quality, size, or format.
                    priority></Image>
            </div>

            Data:
            {dataTest && dataTest.map((value: any) => {
                return <li>{value.text} --- {value.textType}</li>
            })}

            {dataPromise && dataPromise.map((value: any) => {
                return <li>{value.text} --- {value.textType}</li>
            })}
        </main>
    )
}
