export default function swDev() {

    function determineAppServerKey() {
       // var vapidPublicKey ='BJthRQ5myDgc7OSXzPCMftGw-n16F7zQBEN7EUD6XxcfTTvrLGWSIG7y_JxiWtVlCFua0S8MTB5rPziBqNx1qIo'
    }

    let swUrl = `${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(swUrl)
        .then((resp) => console.warn("response: " + resp))
}