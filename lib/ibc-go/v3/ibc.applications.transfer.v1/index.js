import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgTransfer } from "./types/ibc/applications/transfer/v1/tx";
const types = [["/ibc.applications.transfer.v1.MsgTransfer", MsgTransfer]];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const txClient = {
    msgTransfer: (data) => ({
        typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
        value: MsgTransfer.fromPartial(data),
    }),
};
export { txClient, Api, types };