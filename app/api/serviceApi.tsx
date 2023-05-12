import axios from "axios";

const url: string = "http://localhost:8081";
const uri: string = "/text";

// Generate a static version of the route
export async function getStaticProps() {
    const response = await axios.get(url + uri + "/getAllText");

    return response.data;
}

export async function testFetchGetData() {
    const response = await fetch(url + uri + "/getAllText");

    if (!response.ok) {
        throw new Error("Failed to get text data from server!");
    }

    return response.json();
}