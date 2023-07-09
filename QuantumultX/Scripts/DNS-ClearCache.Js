/*
[task_local]

5 0 * * * https://raw.githubusercontent.com/Centralmatrix3/Scripts-Rules/Master/QuantumultX/Script/DNS-ClearCache.Js, tag=Clear-Cache, img-url=trash.circle.system, enabled=true
*/
const message = {
    action: "dns_clear_cache"
};

$configuration.sendMessage(message).then(resolve => {
    if (resolve.ret) {
        console.log("dnsCache Cleared!");
    } else {
        console.log(resolve.error);
    }
    $done();
}, reject => {
    $done();
});
