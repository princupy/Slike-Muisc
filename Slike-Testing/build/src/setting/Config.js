export default class OrasConfig extends Object {
    token;
    prefix;
    nodes;
    spotiId;
    owners;
    spotiSecret;
    spotiNodes;
    webhooks;
    supportId;
    color;
    server;
    botinvite;
    voteUrl;
    voteApi;
    setupBgLink;
    constructor() {
        super();
        this.token =
            "MTEzNzgyMDEyNDM2NDE2MTA2NQ.GuK3LZ.APimxxc6x-erlkngxO_CCJurYfX_SmUgfcl_9k";
        this.botid = "1137820124364161065"
        this.prefix = ".";
        this.nodes = [
            {
                name: `Kronix`,
                url: `lava.link:80`,
                auth: `kronix`,
                secure: false,
            },
          {
              name: `Oras`,
              url: `lava.link:80`,
              auth: `kronix`,
              secure: false,
          }, // Dont Change The Name Of Nodes
        ];
        this.voteApi =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkwNDMxNzE0MTg2NjY0NzU5MiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjczNTI3OTYzfQ.WwA0KXh_nAQcBmR7BPqgLGyElYZheTQmguQfA2F6aNc";
        this.webhooks = {
            guildCreate: "https://discord.com/api/webhooks/1198174135570931823/dgMOQcCGuPVtg0tbZ8epl7x4AIehgfTdZjeHUiRfNB8Yz2gKLpIXjjaC16t4GZjA0Ov9",
            guildDelete: "https://discord.com/api/webhooks/1198174135570931823/dgMOQcCGuPVtg0tbZ8epl7x4AIehgfTdZjeHUiRfNB8Yz2gKLpIXjjaC16t4GZjA0Ov9",
            Cmds: "https://discord.com/api/webhooks/1198174135570931823/dgMOQcCGuPVtg0tbZ8epl7x4AIehgfTdZjeHUiRfNB8Yz2gKLpIXjjaC16t4GZjA0Ov9",
        };
        this.server = "https://discord.gg/aMC2e8zgQb";
        this.botinvite = `https://discord.com/api/oauth2/authorize?client_id=1106136153662435348&permissions=8&scope=applications.commands%20bot`;
        this.spotiId = "fe362a78d4fd41279342e9ac77ca420f";
        this.spotiSecret = "5f300e5689f9466397d4d3c8e8d07a4f";
        this.owners = ["881558378667716639"];
        this.color = "#00ffd1";
        this.supportId = "1185546377896402984"; //Server Id
        this.spotiNodes = [
            {
                id: `Kronix`,
                host: `lava.link`,
                port: 80,
                password: `kronix`,
                secure: false,
            },
          {
              id: `Oras`,
              host: `lava.link`,
              port: 80,
              password: `kronix`,
              secure: false,
          }, // Dont Change The Name Of Nodes
        ];
        this.voteUrl = "https://top.gg/bot/1027828697828433980/vote";
        this.setupBgLink =
            "https://cdn.discordapp.com/attachments/1191733471085858876/1191737831849209968/pngtree-pair-of-headphones-on-the-water-at-nighttime-image_2931863.png?ex=65a68758&is=65941258&hm=82709b29fa0272f20222a0055120ed9a5710cd81b3940e5ffc103dc0094b8f21&";
    }
}
//# sourceMappingURL=Config.js.map