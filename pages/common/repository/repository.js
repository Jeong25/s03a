import { instance } from '../api/Client'

const retrieveCode = async (id, tp, category) => {
    const res = await instance.get(`/rest/v1/common/code?hospId=${id}&cdTp=${tp}&category=${category}`)
    return res.data.data
}

const retrieveWorker = async (hospId, userTp) => {
    const res = await instance.get(`/rest/v1/s032200020/retrieve-doctor-lov?hospId=${hospId}&userTp=${userTp}`)
    return res.data.data
}

const retrieveOveCellCustMob = async (hospId) => {
    const res = await instance.get(`/rest/v1/s0321A0060/retrieve-ove-cell-cust-mob?hospId=${hospId}`);
    return res.data.data;
}

const retrieveInsemCellCustMob = async (hospId, custOpId, opWorkEvent) => {
    const res = await instance.get(`/rest/v1/s0321A0070/retrieve-insem-cell-cust-mob?hospId=${hospId}&custOpId=${custOpId}&opWorkEvent=${opWorkEvent}`);
    return res.data.data;
}

const updateInsemCellCustMob = async (params) => {
    const res = await instance.post(`/rest/v1/s0321A0070/update-insem-cell-cust-mob`, params);
    return res.data.message;
}

const qrScan = async (custOpId, opWorkTp, params) => {
    const res = await instance.post(`/rest/v1/s0321A0040/qr-scan?custOpId=${custOpId}&opWorkTp=${opWorkTp}`, params);
    return res.data.message;
}

export { retrieveCode, retrieveWorker, retrieveOveCellCustMob, retrieveInsemCellCustMob, updateInsemCellCustMob, qrScan };