let cacheData = "appV2";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData)
            .then((cache) => {
                cache.addAll(
                    [
                        '/static/js/bundle.js',
                        '/index.html',
                        '/'
                    ]
                )
            }));
});//add the basis to the cache
this.addEventListener('fetch', (event) => {
    if (!navigator.onLine) {//if no connection then take data from the cache
        event.respondWith(//check in network field Initiator
            caches
                .match(event.request)
                .then(resp => {
                    if (resp) {
                        return resp
                    }
                    //let requestUrl=event.request.clone();//if some data isn't cached?
                    //fetch(requestUrl);
                })
        );
    }

});//get the basis from the cache 
