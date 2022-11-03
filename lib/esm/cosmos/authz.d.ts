import { AminoConverters } from "@cosmjs/stargate";
export interface AminoMsgGrant {
    /** Bech32 account address */
    readonly granter: string;
    /** Bech32 account address */
    readonly grantee: string;
    readonly grant: {
        authorization: {
            "@type": "/cosmos.authz.v1beta1.GenericAuthorization";
            msg: string;
        };
        expiration: string;
    };
}
export declare function createAuthzAminoConverters(): AminoConverters;