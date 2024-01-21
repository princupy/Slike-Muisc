export default class OrasEmoji extends Object {
  constructor(client) {
      super();
      this.tick = "<a:tick_tick:1191365205192626226>";
      this.cross = "<:worng:1191365018109882459>";
      this.playing = "<a:Playing:1191365984121016381>";
      this.exclamation = "<:red_info:1191366185057534042>";
      this.queue = "<:queue:1191366490084102237>";
      this.info = "<:red_info:1191366185057534042>";
      this.defSearch = "<:youtube:1191366757038948447>";
      this.premium = "<:icon_event:1191366967727243354>";
      this.invite = "<:red12:1191367168814764162> ";
      this.support = "<:supports:1191367515012612147>";
      this.spotiSearch = "<:spotify:1191367700040126604>";
      this.deezSearch = "<:deezer:1191367878134476831>";
      this.vote = "<:Voters:1191368044971315262>";
      this.soundSearch = "<:SoundCloud:1191368250831941673>";
      this.badges = {
          named: "<:OWNER:1191368777133195395>",
          owner: "<a:owner:1191368481669652560>",
          dev: "<a:dev:1191368941801578567>",
          admin: "<a:Admin:1191369090464489513>",
          codev: "<:coderqt:1191369415070076969>",
          author: "<:authority:1191383016279375923>",
          friend: "<:Friendship:1191369861604065350>",
          vip: "<:VIP:1191370641232896022>",
          premiumUser: "<:icon_event:1191366967727243354>",
          mod: "<:mod:1191371178036703232>",
          staff: "<:staff:1191371351097876660>",
          supporter: "<a:supporter:1191371619394924615>",
          user: "<:userRed:1191372310712684554>",
      };
      this.helpMenu = {
          music: "<:red_music7cr:1192045038700597260>",
          home: "<:red_home:1191375388471996457>",
          filters: "<:c_filter:1192045224059486301>",
          info: "<:info_red:1192045614918283274>",
          utility: "<:red_settings:1192045376476291092>",
          allCommands: "<a:red_tick:1192046156159664210>",
      };
      this.setup = {
          pause: "<:pause:1191379275627106324>",
          resume: "<:resume:1191379683820965888>",
          skip: "<:skip:1191379928390840330>",
          previous: "<:Previous:1191380907412688896>",
          shuffle: "<:shuffle:1191381255346983092>",
          author: "<:Author:1191369681962025031>",
          nowPlaying: "<a:Playing:1191365984121016381>",
          requester: "<:userRed:1191372310712684554>",
          duration: "<a:timer2:1191386585317527685>",
          stop: "<:stop:1191387032275136604>",
          loop: "<:loop:1191387414032302143>",
          volLow: "<:lower_vol:1191388672730333195>",
          volHigh: "<:high_vol:1191389039748722758>",
          fav: "<a:heart:1191389869449154601>",
          autoplay: "<:PZ_AutoPlay:1191390330575147127>",
          filters: "<:filter:1191390899742199818>",
      };
      this.orasNew = {
          emote: "<:red_musicnote:1191375167692218378>",
          nowPlaying: "<a:Playing:1191365984121016381>",
          requester: "<:userRed:1191372310712684554>",
          duration: "<a:timer2:1191386585317527685>",
          author: "<:Author:1191369681962025031>",
          pause: "<:pause:1191379275627106324>",
          resume: "<:resume:1191379683820965888>",
          skip: "<:skip:1191379928390840330>",
          fav: "<a:heart:1191389869449154601>",
          previous: "<:Previous:1191380907412688896>",
          stop: "<:stop:1191387032275136604>",
      };
      this.spotify = {
          emote: "<:spotify:1191367700040126604>",
          filters: "<:filter:1191390899742199818>",
          nowPlaying: "<a:Playing:1191365984121016381>",
          requester: "<:userRed:1191372310712684554>",
          duration: "<a:timer2:1191386585317527685>",
          pause: "<:pause:1191379275627106324>",
          author: "<:Author:1191369681962025031>",
          resume: "<:resume:1191379683820965888>",
          stop: "<:stop:1191387032275136604>",
          loop: "<:loop:1191387414032302143>",
          shuffle: "<:shuffle:1191381255346983092>",
          forward: "<:skip:1191379928390840330>",
          backward: "<:rewind:1198337445415112794>",
          volLow: "<:lower_vol:1191388672730333195>",
          volHigh: "<:high_vol:1191389039748722758>",
          previous: "<:Previous:1191380907412688896>",
          skip: "<:skip:1198338158996234391>",
      };
      this.special = {
          emote: "<:red_musicnote:1191375167692218378>",
          nowPlaying: "<a:Playing:1191365984121016381>",
          requester: "<:userRed:1191372310712684554>",
          duration: "<a:timer2:1191386585317527685>",
          pause: "<:pause:1191379275627106324>",
          author: "<:Author:1191369681962025031>",
          resume: "<:resume:1191379683820965888>",
          stop: "<:stop:1191387032275136604>",
          loop: "<:loop:1191387414032302143>",
          shuffle: "<:shuffle:1191381255346983092>",
          forward: "<:forward:1191397250509840394>",
          backward: "<:Previous:1191380907412688896>",
          volLow: "<:lower_vol:1191388672730333195>",
          volHigh: "<:high_vol:1191389039748722758>",
          previous: "<:Previous:1191380907412688896>",
          skip: "<:skip:1191379928390840330>",
      };
      this.noButtons = {
          emote: "<:red_musicnote:1191375167692218378>",
          nowPlaying: "<a:Playing:1191365984121016381>",
          author: "<:Author:1191369681962025031>",
          requester: "<:userRed:1191372310712684554>",
          duration: "<a:timer2:1191386585317527685>",
          filters: "<:filter:1191390899742199818>",
      };
      this.simple = {
          emote: "<:red_musicnote:1191375167692218378>",
          nowPlaying: "<a:Playing:1191365984121016381>",
          requester: "<:userRed:1191372310712684554>",
          author: "<:Author:1191369681962025031>",
          duration: "<a:timer2:1191386585317527685>",
          filters: "<:filter:1191390899742199818>",
          pause: "<:pause:1191379275627106324>",
          resume: "<:resume:1191379683820965888>",
          stop: "<:stop:1191387032275136604>",
          skip: "<:skip:1191379928390840330>",
          loop: "<:loop:1191387414032302143>",
      };
      this.oldStyle = {
          emote: "<:music__kastro:1064440924190539888>",
          nowPlaying: "<a:Playing:1191365984121016381>",
          author: "<:Author:1191369681962025031>",
          requester: "<:userRed:1191372310712684554>",
          duration: "<a:timer2:1191386585317527685>",
      };
  }
}
//# sourceMappingURL=Emoji.js.map