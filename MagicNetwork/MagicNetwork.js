import os from 'os';

let MagicNetwork = {

    getAllInfo: function () {
        const NetInt = os.networkInterfaces();
        if (typeof NetInt === 'object' && NetInt) {
            return NetInt
        }
        else {
            return 'MAGIC_NET_ERR: Interfaces is not found!';
        }
    },

    getInterfaces: function () {
        const NetInt = this.getAllInfo();
        if (typeof NetInt === 'object' && NetInt) {
            return Object.keys(NetInt);
        }
        else {
            return NetInt;
        }
    },

    getInfoByInt: function (Interface) {
        const NetInt = this.getAllInfo();
        if (typeof NetInt === 'object' && NetInt) {
            if (NetInt[Interface]) {
                return NetInt[Interface];
            }
            else {
                return 'MAGIC_NET_ERR: There is no information about the requested interface. The interface may not be specified correctly.';
            }
        }
        else {
            return NetInt;
        }
    },
    getInfoByIntIPvX: function (Interface, IntFamily) {
        const NetInt = this.getAllInfo();
        if (typeof NetInt === 'object' && NetInt) {
            if (IntFamily && IntFamily === 'IPv4' || IntFamily === 'IPv6') {
                if (NetInt[Interface]) {
                    return NetInt[Interface].filter(interfaceData => interfaceData.family === IntFamily);
                }
                else {
                    return 'MAGIC_NET_ERR: There is no information about the requested interface. The interface may not be specified correctly.';
                }
            }
            else {
                return 'MAGIC_NET_ERR: The IP version specified is incorrect! The version can be 4 or 6.';
            }
        }
        else {
            return NetInt;
        }
    },
    getInfoByIntIPv4: function (Interface) {
        return this.getInfoByIntIPvX(Interface, 'IPv4');
    },
    getInfoByIntIPv6: function (Interface) {
        return this.getInfoByIntIPvX(Interface, 'IPv6');
    }
};

export default MagicNetwork;
