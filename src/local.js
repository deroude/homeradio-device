import os from 'os';
export const getIP = () => {
    const ifaces = os.networkInterfaces();
    for (let ik in Object.keys(ifaces)) {
        for (let addr in ifaces[ik]) {
            if (addr.internal === false) {
                return addr.address;
            }
        }
    }
}
export const getId = () => "test";