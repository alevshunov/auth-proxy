# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 2.0.0 (2025-01-15)


### ⚠ BREAKING CHANGES

* **proxy:** Now there is no need to fill out all the fields of Login form
* **ui:** Now there is no need to fill out all the fields of Login form
* **loginform:** State select menu no longer shows values saved in localStorage

### Features

* add favicon ([b0befd2](https://github.com/alevshunov/auth-proxy/commit/b0befd26ae98cdfd0ab49ab6f04b434a3520d880))
* add URL parser and modal for logs table ([74d3ffb](https://github.com/alevshunov/auth-proxy/commit/74d3ffb5911dbc09271f455838c4d01c52a1d178))
* add usage of config YAML file ([bc3c71f](https://github.com/alevshunov/auth-proxy/commit/bc3c71fddc7a90b6422635edc28c324329279e29))
* **cross-var:** add typescript ([0364884](https://github.com/alevshunov/auth-proxy/commit/036488461c9238535a55a82cc4684a447d04f34a)), closes [#1](https://github.com/alevshunov/auth-proxy/issues/1)
* **listener:** separate listener project to different docker image ([b61cf9a](https://github.com/alevshunov/auth-proxy/commit/b61cf9ad48b4e94b001bd616111258a4a5836e43))
* **loginform:** add History modal ([b987543](https://github.com/alevshunov/auth-proxy/commit/b98754302169e2f3d56b5b2fe64795b162deb358))
* **loginform:** remove history values from state select menu ([98d888a](https://github.com/alevshunov/auth-proxy/commit/98d888a53c61f5004a71af22e5d5fd8f4d0feb59))
* **loginform:** save rarely used fields in localStorage ([a794181](https://github.com/alevshunov/auth-proxy/commit/a79418147613238815aa030a09a2495a64793c18))
* **logstable:** add search field to Logs table ([d29c5d9](https://github.com/alevshunov/auth-proxy/commit/d29c5d9358b6ed16778e3ae8ae404a2b3b732aa5))
* **proxy/config:** add cache property to config ([f3c773b](https://github.com/alevshunov/auth-proxy/commit/f3c773be2953c7f8600e38789d87550633866db3))
* **proxy:** add browser session scoped mode for login rights ([cc87997](https://github.com/alevshunov/auth-proxy/commit/cc87997295b5f1a9f9025aabcf657e4b8c166b68))
* **proxy:** add client field to logs ([26814d7](https://github.com/alevshunov/auth-proxy/commit/26814d776cee4a6dde8797ab30777027bdfd1086))
* **proxy:** add yaml test user file support ([d247113](https://github.com/alevshunov/auth-proxy/commit/d2471132575845a85faa7c6b4d72f647be32ff64))
* **proxy:** make fields optional ([ee65824](https://github.com/alevshunov/auth-proxy/commit/ee65824ad9cabbdbe416442626285cce917b81c1))
* **proxy:** use extra fields from config ([1d25526](https://github.com/alevshunov/auth-proxy/commit/1d255262adbd0636a8a25398b203c05be9682295))
* remove listener project from docker build, add graceful shutdown ([3f3a149](https://github.com/alevshunov/auth-proxy/commit/3f3a149e382ed5308dd44f7f8173d1919c7d496d))
* **ui:** add filter by client to logs table ([9e2b82e](https://github.com/alevshunov/auth-proxy/commit/9e2b82e717f1078a86152dc68df15d37be4944cb))
* **ui:** create request builder ([df180f2](https://github.com/alevshunov/auth-proxy/commit/df180f24ef5a9a6034b1eeaec1d60425374c2326)), closes [#4](https://github.com/alevshunov/auth-proxy/issues/4)
* **ui:** get extra fields from server and use them instead of hardcoded extra fields ([34acc47](https://github.com/alevshunov/auth-proxy/commit/34acc47a282daa89fac7477745b8eb1f39d38981))
* **ui:** make fields optional ([74c0dbe](https://github.com/alevshunov/auth-proxy/commit/74c0dbe2ff6de181655f0223b08b1a1aeaa23a9c))
* **ui:** start using react query for managing fetching data ([b9b0567](https://github.com/alevshunov/auth-proxy/commit/b9b0567681fef223ef693e1bdbce1f2b71ce652f))


### Bug Fixes

* add default path for Login button ([a4dd7dd](https://github.com/alevshunov/auth-proxy/commit/a4dd7ddc8734bde44d70eb3e8f67b000ef1fc93b))
* add import order rules to ESLint ([222018b](https://github.com/alevshunov/auth-proxy/commit/222018bf148e26f113a65b968df3c53b6c018a09))
* add name to filter by client menu in Logs table ([4962e95](https://github.com/alevshunov/auth-proxy/commit/4962e952383dad644d722c142f0dd9d53116bd68))
* add redirect to requested path while not authorized ([fd18c91](https://github.com/alevshunov/auth-proxy/commit/fd18c91b52a68e82b1fb2827abfb1a640b71d1a2))
* add responsibility to extra fields ([e51d7af](https://github.com/alevshunov/auth-proxy/commit/e51d7af33983b75c72f35d66461fb481fef4a1ae))
* add server side pagination to Logs table ([3863ab0](https://github.com/alevshunov/auth-proxy/commit/3863ab02e6682be70f4b5f0fa99d0b484f91c296))
* **api/getlogs:** use axios params instead of stringifying them manually ([70ff518](https://github.com/alevshunov/auth-proxy/commit/70ff518a0342afe62997a433c592197d4dc86eb0))
* **api/login:** add headers to request ([7f9eeb4](https://github.com/alevshunov/auth-proxy/commit/7f9eeb4c969fafa7e8022d027a54fffc6d38d389))
* change number fields type to string ([d8a48dd](https://github.com/alevshunov/auth-proxy/commit/d8a48dd285eaec025e3315717cdfafab9b64ee6f))
* **changelog.md:** fix bug with updating CHANGELOG.md file ([6cac05b](https://github.com/alevshunov/auth-proxy/commit/6cac05b8e9af425f65338b7b461fd82ee3fc7670))
* **changelog.md:** fix CHANGELOG.md file ([4e89a23](https://github.com/alevshunov/auth-proxy/commit/4e89a23a0290fc169149cf5d081cc2b9c19a5ba3))
* **config.ts:** return environment variables for backward compatibility ([eb86244](https://github.com/alevshunov/auth-proxy/commit/eb86244fc28f0fce2ea45b2e6229981ff9217563)), closes [#2](https://github.com/alevshunov/auth-proxy/issues/2)
* **cookiescleaner:** fix cookie cleanup ([d4e5b46](https://github.com/alevshunov/auth-proxy/commit/d4e5b46fa0ac5c24f87a3107702640c7380af1f9))
* create library that unifies access to variables from npm scripts ([91b1508](https://github.com/alevshunov/auth-proxy/commit/91b1508f042454102c0bb3cf14f8e14aba75362f))
* **cross-var:** add Babel ([4f9c063](https://github.com/alevshunov/auth-proxy/commit/4f9c0632eb2e5ff07a75bc6ae3b4cdc89cfa5a89)), closes [#5](https://github.com/alevshunov/auth-proxy/issues/5)
* **dockerhub.md:** update DOCKERHUB.md file ([aaf1207](https://github.com/alevshunov/auth-proxy/commit/aaf12077a8f5e1f23b47bb8ef24418953b0d7502))
* **historybutton:** add fixed width for table columns ([2e45a0c](https://github.com/alevshunov/auth-proxy/commit/2e45a0ca58a0d65a80ac1f867a5ea037107eb31a))
* **historybutton:** add max height for permissions and roles containers in history table ([0e47128](https://github.com/alevshunov/auth-proxy/commit/0e4712827eb2d3dcfe77e457dfb696fa5840fa46))
* **historybutton:** change history modal styles ([e504d62](https://github.com/alevshunov/auth-proxy/commit/e504d62668f7f8dd48338f331916f3f05b693676))
* **index.html:** add mobile responsibility ([2aa33c9](https://github.com/alevshunov/auth-proxy/commit/2aa33c96868738537845f0e704b492a395d6a529))
* **index.html:** fix front drop when using hot reload ([0be8be3](https://github.com/alevshunov/auth-proxy/commit/0be8be37b386d3cf58b09736d85d426050bfeeec))
* **infobutton:** add fixed width for table columns ([c8f7a66](https://github.com/alevshunov/auth-proxy/commit/c8f7a664222b9fdbb2b3e797ebdd8a6032ce650f))
* **infobutton:** add scroll to long strings in info table ([a13f43a](https://github.com/alevshunov/auth-proxy/commit/a13f43ac435391042aa0fe087ddf1a65a44c217a))
* **infobutton:** disable button when path is root and hide columns in table if they are empty ([d918b04](https://github.com/alevshunov/auth-proxy/commit/d918b04fcec9192f14caf771e42bf3ee027a4466))
* **listener:** remove ports value from dockerhub readme ([97d7bd1](https://github.com/alevshunov/auth-proxy/commit/97d7bd17861db3004bf56ec9f97620e6b29f91bb))
* **loginform:** add permissions sorting when displaying ([1f56748](https://github.com/alevshunov/auth-proxy/commit/1f567482872e7cb77ac60866e9d61578acac9214))
* **loginform:** add validation of semicolons in permissions field ([1c263bd](https://github.com/alevshunov/auth-proxy/commit/1c263bdc9316cfc48e8bdc686f69ae0b4898d6fd))
* **loginform:** change IAMUserID field width ([574f656](https://github.com/alevshunov/auth-proxy/commit/574f6563c662a04c76af87fb81207d074357ed69))
* **loginform:** change order of fields ([500e11c](https://github.com/alevshunov/auth-proxy/commit/500e11c3bea1f66ab7b69ea938383f0486d19b30))
* **loginform:** change styles for state menu and history button line ([763a006](https://github.com/alevshunov/auth-proxy/commit/763a006e067660f5415c813a6c609931eba2c359))
* **loginform:** create an accordion and move fields after divider into it ([ed803bf](https://github.com/alevshunov/auth-proxy/commit/ed803bfd1246a0ad258a8784d82b7a54cc059422))
* **loginform:** fix default context bug ([62466f9](https://github.com/alevshunov/auth-proxy/commit/62466f92b24bcbf1396dcdee784123bb5ce618fa))
* **loginform:** fix input in permissions field ([5ba5574](https://github.com/alevshunov/auth-proxy/commit/5ba5574983b15956eaaab7e087a313ca31c62573))
* **loginform:** fix phantom fields ([11172ae](https://github.com/alevshunov/auth-proxy/commit/11172aef80a0d0796a6dc376b71f617d8286564b))
* **loginform:** fix state 'out of range' warning when using values from history ([8247cda](https://github.com/alevshunov/auth-proxy/commit/8247cdab75b52934fee6d8e0fb60b61bfd182bdd))
* **loginform:** move reverse formatting of permissions from onChange to onSubmit function ([d81530b](https://github.com/alevshunov/auth-proxy/commit/d81530b51e4e88ec7d2c3f3714f674fb89165e09))
* **loginform:** optimize process of inserting a new value into history ([b8b1051](https://github.com/alevshunov/auth-proxy/commit/b8b10511444813ccc3ce14436f628be9f02d0d1a))
* **loginform:** remove Logout button from Login form ([408b1cb](https://github.com/alevshunov/auth-proxy/commit/408b1cbadb68e3b2dac92b06238e1eee26e19ac1))
* **loginform:** replace IAMUserID field ([60825a0](https://github.com/alevshunov/auth-proxy/commit/60825a042b7d5b6722f28d4a47e1a32aafcc4b9f))
* **logstable:** add fixed width for table columns ([e2f47fc](https://github.com/alevshunov/auth-proxy/commit/e2f47fcdec08f32ccc51566df5ba712300859a47))
* **logstable:** change logs table styles, add copy and open buttons ([041b6d5](https://github.com/alevshunov/auth-proxy/commit/041b6d5e3100f48917947730e5019dc74bbc8e2c))
* **logstable:** decode URL string ([934b320](https://github.com/alevshunov/auth-proxy/commit/934b32040a827935c7189b65317a89c6bb618ddd))
* **logstable:** fix bug with counting rows in Logs table ([c3f8781](https://github.com/alevshunov/auth-proxy/commit/c3f87819179f46a878897a95dd9b7664ae0269be))
* **logstable:** fix client select display condition ([b0e0a8d](https://github.com/alevshunov/auth-proxy/commit/b0e0a8d961e0e0d4cbb5746d737622095094515a))
* **logstable:** fix sending requests while waiting search sync ([362a6d4](https://github.com/alevshunov/auth-proxy/commit/362a6d455cc4a6ede8f4cdddd7012874b5c8dbf6))
* **logstable:** fix unique rows keys problem ([b5a4607](https://github.com/alevshunov/auth-proxy/commit/b5a4607bb59f43607745d0c2a4143dd5ef1bfba1))
* **logstable:** refactor and divide сode into components ([d0e0c0c](https://github.com/alevshunov/auth-proxy/commit/d0e0c0c2f4b8e6fc7dcf4156d084d42e49b1267b))
* **logsview:** fix bug with logs page and table height, add pagination ([81eba1c](https://github.com/alevshunov/auth-proxy/commit/81eba1c41e333497b01105071fd08ee0bc69bf32))
* **management.routes.ts:** decode URI before filter by search query ([022bcf6](https://github.com/alevshunov/auth-proxy/commit/022bcf6b6771153461aa722154bf15bf43df6c12))
* **management.routes.ts:** remove comment ([137d877](https://github.com/alevshunov/auth-proxy/commit/137d877a924f1e382a488b26757ca0aa63bc4a99))
* **management:** fix bug with redirect to login page on development mode ([0cc1f8d](https://github.com/alevshunov/auth-proxy/commit/0cc1f8daf1a2ca286139b99381bc859933a935df))
* **package-lock.json:** fix webpack vulnerability ([43d5429](https://github.com/alevshunov/auth-proxy/commit/43d5429aa0485ce7102b9c83c5cc5d7044f32c9b))
* **permissionsfield:** disable spellcheck on permissions field ([fc8d96c](https://github.com/alevshunov/auth-proxy/commit/fc8d96cfbed07fe8161bb82eaa282d91a460153f))
* **proxy/config:** change yaml parser package ([b7079ca](https://github.com/alevshunov/auth-proxy/commit/b7079ca1650c2ce73a08932f4df322fdf7d09781))
* **proxy/config:** use boolean type of cache property in config.yml instead of string ([d52654b](https://github.com/alevshunov/auth-proxy/commit/d52654b80e7d8b1ebacb1a84e2c2799388db16c6))
* **proxy:** add check login middleware ([91dfe07](https://github.com/alevshunov/auth-proxy/commit/91dfe07a35052fdcd10f3d997fdbb927101402b1))
* **proxy:** add strategy pattern for rights ([c6b7292](https://github.com/alevshunov/auth-proxy/commit/c6b729238bd3c5743bda1fdd7266d4967767bcd5))
* **proxy:** change onstart console logs ([c3f5a02](https://github.com/alevshunov/auth-proxy/commit/c3f5a023de781843e50c0fc9384e881bdbd7fc75))
* **proxy:** change types names (remove I at the beginning) ([13c019c](https://github.com/alevshunov/auth-proxy/commit/13c019cc10ce3abdf043b14404b5b12a01402337))
* **proxy:** create logs params parser ([6466209](https://github.com/alevshunov/auth-proxy/commit/646620994b9948f5256fd3611b89c21e4bcdb87e))
* **proxy:** do not cache index.html, testusers and environment on client ([c4953b8](https://github.com/alevshunov/auth-proxy/commit/c4953b829c626e9075f20feb6749c2fa89c5e79e)), closes [#6](https://github.com/alevshunov/auth-proxy/issues/6)
* **proxy:** fix session middleware and dockerhub.md file ([a4054de](https://github.com/alevshunov/auth-proxy/commit/a4054dead67284785499c4a4bf96832914405dba))
* **proxy:** fix unexpected redirect to proxied host on HTTP 302 ([bfa21dd](https://github.com/alevshunov/auth-proxy/commit/bfa21dddf047b8e8ff8939446288e776fe96ece7)), closes [#7](https://github.com/alevshunov/auth-proxy/issues/7)
* **proxy:** refactor config object ([7da0e2e](https://github.com/alevshunov/auth-proxy/commit/7da0e2e9c18ad78acc9aaf13b551adb671981bbe)), closes [#3](https://github.com/alevshunov/auth-proxy/issues/3)
* **proxy:** remove unnecessary config variables ([e37c123](https://github.com/alevshunov/auth-proxy/commit/e37c1237c47c51eb38a1e22fe9d757bc1ee9cce2))
* **proxy:** split management routes to files ([4346b76](https://github.com/alevshunov/auth-proxy/commit/4346b764fd1344a26a3740ee9245223380fd6405))
* **proxy:** use config variable instead of __dirname ([b136318](https://github.com/alevshunov/auth-proxy/commit/b1363187bbc1e27c1eb7e0819fe762f57c77536a))
* remove dotenv packages ([08820df](https://github.com/alevshunov/auth-proxy/commit/08820df7e28f6688c253d6b4c0536cdf9cb53b75))
* **statefield:** add default first name for values from testusers.ini file ([241775c](https://github.com/alevshunov/auth-proxy/commit/241775c22ee1a4f173ada7cbd78928259794952f))
* **statefield:** change possibly used in config variables names ([2b76c58](https://github.com/alevshunov/auth-proxy/commit/2b76c58779290207590cfe7f456316768ba3d6cb))
* **statefield:** change text format in select menu ([acbcba2](https://github.com/alevshunov/auth-proxy/commit/acbcba26b8231e4ecc4b9390df7f8ee0134d8159))
* **statefield:** remove Password1 value from roles in state menu ([b4de94c](https://github.com/alevshunov/auth-proxy/commit/b4de94c586dc767b8302eb6d15f923cb575c686f))
* **strategies/rights:** add usage of generics to StrategyFactory ([574f5f8](https://github.com/alevshunov/auth-proxy/commit/574f5f8fffb8a5119d881f32cea656ce0d8599ba))
* **ui/src/api:** rewrite login and logout fetches using axios ([a0fda58](https://github.com/alevshunov/auth-proxy/commit/a0fda5887d0d8f5de3f50af8afb418277a746a4f))
* **ui:** add fade animations for modals ([d5785ee](https://github.com/alevshunov/auth-proxy/commit/d5785ee3123c8e4a488abfb7b715c5a6e54b004c))
* **ui:** add lazy load of routes ([8863560](https://github.com/alevshunov/auth-proxy/commit/8863560834662e5565e50daafb54089f2ed5c653))
* **ui:** remove domain name from requests ([5ecbcb3](https://github.com/alevshunov/auth-proxy/commit/5ecbcb3e97f94f27ba3604533fc2097155188864))
* **ui:** use axios instead of fetch ([f37a4e0](https://github.com/alevshunov/auth-proxy/commit/f37a4e03a2f622102369c9572c0080d0bb15339e))
* use static build of ui in dev mode ([9405989](https://github.com/alevshunov/auth-proxy/commit/94059898c0f3c8f36de8a6453768da29dc48bf8c))


### Styling

* **loginview:** specify the maximum width of the Login form and center it ([b91b9f3](https://github.com/alevshunov/auth-proxy/commit/b91b9f3cee1ece9dff48796c65c459880a381035))
* **logsview:** change Logs table styles and move long URLs ([d8b71c1](https://github.com/alevshunov/auth-proxy/commit/d8b71c1298f6d5ae7b8ecc57aa53736b790b8220))


### Build System

* add test users yaml file to ignore ([25c721b](https://github.com/alevshunov/auth-proxy/commit/25c721b769d7b693effda7ca1e7268a7d78e94bc))
* change Dockerfile commands ([107e41d](https://github.com/alevshunov/auth-proxy/commit/107e41d71d0116c81b0e9cd5f1a23b786fcf3ec6))
* **cross-var:** fix docker-build script ([b0b7632](https://github.com/alevshunov/auth-proxy/commit/b0b7632a7f27cb8785e24ac91d31db8d8fa36f04))
* **package-lock.json:** update dependencies ([3f990e2](https://github.com/alevshunov/auth-proxy/commit/3f990e2207756ac1ad73cf3c5a4e95091c079c9b))
* **package.json:** add prod script ([811342e](https://github.com/alevshunov/auth-proxy/commit/811342ee45f3ae53f64d6f26fc2da72dedf1d994))
* **package.json:** add scripts to do release as specific type ([f8d9fe4](https://github.com/alevshunov/auth-proxy/commit/f8d9fe4c67f5c4e9512752d71124afbcf753da6d))
* **package.json:** remove cross-var package cause of vulnerabilities and change scripts ([a549c25](https://github.com/alevshunov/auth-proxy/commit/a549c25eae48bd1f236059a01e71e2cc3f9b7161))
* **package.json:** temporary fix for deploy on Windows from script ([f1d29b2](https://github.com/alevshunov/auth-proxy/commit/f1d29b286772887127b636bed642c80e804ae9eb))


### Docs

* **dockerhub.md:** change documentation ([46a2864](https://github.com/alevshunov/auth-proxy/commit/46a28645b2071e4e5aa250ebf896ce52e99143e3))


### Others

* **.versionrc.json:** record any type commits to CHANGELOG.md ([6c0abb4](https://github.com/alevshunov/auth-proxy/commit/6c0abb4bc5183f575bfe04588c163884d7d17581))
* add commitizen, standard-version and commit-msg hook ([7b4e322](https://github.com/alevshunov/auth-proxy/commit/7b4e3229cde781f82c225dbce035909f8602f296))
* **cross-var:** remove cross-var workspace ([00a05ee](https://github.com/alevshunov/auth-proxy/commit/00a05ee252d57cdea7da33b951d1521d6fc16d13))
* **dockerhub.md:** fix DOCKERHUB.md file ([b214fdf](https://github.com/alevshunov/auth-proxy/commit/b214fdff67f75ff181e27a7cad67d882e60cdbfe))
* **husky:** fix ignored git hooks ([53243cb](https://github.com/alevshunov/auth-proxy/commit/53243cb73975721978d1e8e4580b8573b3768825))
* **release:** 1.0.0 ([a5e1db1](https://github.com/alevshunov/auth-proxy/commit/a5e1db1a990b2b865754bd5b1102e5c1d23fcbb7))
* **release:** 1.0.1 ([1bfcbaf](https://github.com/alevshunov/auth-proxy/commit/1bfcbafa57aa8299a38e602138b8dbd302e583ab))
* **release:** 1.0.2 ([3c9505e](https://github.com/alevshunov/auth-proxy/commit/3c9505e1047a41943e985c9af329835492aba405))
* **release:** 1.0.3 ([8ad92b6](https://github.com/alevshunov/auth-proxy/commit/8ad92b65636ad187551ddaba84df1a8e93b61c01))
* **release:** 1.1.0 ([088e325](https://github.com/alevshunov/auth-proxy/commit/088e3258f6a14c1b46cd433036313e9d673f1ddb))
* **release:** 1.1.1 ([2cafa8c](https://github.com/alevshunov/auth-proxy/commit/2cafa8c57768e547a3850c3d4258568da38405f1))
* **release:** 1.1.10 ([73cb2c3](https://github.com/alevshunov/auth-proxy/commit/73cb2c33d0b8fa66e5a7ba2871b2a672e0f250f0))
* **release:** 1.1.11 ([5a4045a](https://github.com/alevshunov/auth-proxy/commit/5a4045ad9a08994ff8e22fbbdb8e95b8f5ebee64))
* **release:** 1.1.12 ([5b21865](https://github.com/alevshunov/auth-proxy/commit/5b21865dd2fd2b9b7e211a856e04bdb968b8754c))
* **release:** 1.1.13 ([c0d935e](https://github.com/alevshunov/auth-proxy/commit/c0d935eca9cf6c11252cd9c341b60b3c88c44d3e))
* **release:** 1.1.14 ([28a8bd1](https://github.com/alevshunov/auth-proxy/commit/28a8bd159d647d3658761014f8a1851d40c3ee2c))
* **release:** 1.1.15 ([08df3aa](https://github.com/alevshunov/auth-proxy/commit/08df3aa90d998367820510dfeff50d9b862ae686))
* **release:** 1.1.16 ([48b1f99](https://github.com/alevshunov/auth-proxy/commit/48b1f992b6b25e45923a57cff49e40b290f27efa))
* **release:** 1.1.17 ([6eb7d1b](https://github.com/alevshunov/auth-proxy/commit/6eb7d1ba68c52748e94b71af4849eea4d78a6c15))
* **release:** 1.1.18 ([78d478b](https://github.com/alevshunov/auth-proxy/commit/78d478b20fd74a47a6d9151deb96c583bb07b301))
* **release:** 1.1.19 ([41900e1](https://github.com/alevshunov/auth-proxy/commit/41900e1d7c3710af2ce6a5426460083edd84fdf2))
* **release:** 1.1.2 ([d0b9751](https://github.com/alevshunov/auth-proxy/commit/d0b975186939dc4d682fc9af4d12b55585f5937f))
* **release:** 1.1.3 ([d028df9](https://github.com/alevshunov/auth-proxy/commit/d028df916fad4fa60cd900e70f6feb3ec80f55ba))
* **release:** 1.1.4 ([b5ce0c8](https://github.com/alevshunov/auth-proxy/commit/b5ce0c887485bc11e1354cc8be5ddd23cc00a369))
* **release:** 1.1.5 ([95f68e8](https://github.com/alevshunov/auth-proxy/commit/95f68e86bd0d5fcedbf26f38d983d886baacfbef))
* **release:** 1.1.6 ([4af1043](https://github.com/alevshunov/auth-proxy/commit/4af10438a06cadf8fe3520b78ea9478b111321d8))
* **release:** 1.1.7 ([269a3eb](https://github.com/alevshunov/auth-proxy/commit/269a3ebb4a5f99ab696d9e031db6f1614ffa7c5b))
* **release:** 1.1.8 ([31ab541](https://github.com/alevshunov/auth-proxy/commit/31ab541697fc36af53da4b469af7c8b844f83bf8))
* **release:** 1.1.9 ([25524a8](https://github.com/alevshunov/auth-proxy/commit/25524a84267558c0ffc671680d08c1735d0b36f2))

### [1.1.19](https://github.com/bxr1nG/auth/compare/v1.1.18...v1.1.19) (2023-07-06)


### Features

* **proxy:** add yaml test user file support ([d247113](https://github.com/bxr1nG/auth/commit/d2471132575845a85faa7c6b4d72f647be32ff64))


### Build System

* add test users yaml file to ignore ([25c721b](https://github.com/bxr1nG/auth/commit/25c721b769d7b693effda7ca1e7268a7d78e94bc))


### Docs

* **dockerhub.md:** change documentation ([46a2864](https://github.com/bxr1nG/auth/commit/46a28645b2071e4e5aa250ebf896ce52e99143e3))

### [1.1.18](https://github.com/bxr1nG/auth/compare/v1.1.17...v1.1.18) (2023-04-11)


### Bug Fixes

* **proxy:** fix unexpected redirect to proxied host on HTTP 302 ([bfa21dd](https://github.com/bxr1nG/auth/commit/bfa21dddf047b8e8ff8939446288e776fe96ece7)), closes [#7](https://github.com/bxr1nG/auth/issues/7)

### [1.1.17](https://github.com/bxr1nG/auth/compare/v1.1.16...v1.1.17) (2023-04-10)


### Bug Fixes

* **loginform:** fix phantom fields ([11172ae](https://github.com/bxr1nG/auth/commit/11172aef80a0d0796a6dc376b71f617d8286564b))

### [1.1.16](https://github.com/bxr1nG/auth/compare/v1.1.15...v1.1.16) (2023-03-29)


### Bug Fixes

* **proxy/config:** change yaml parser package ([b7079ca](https://github.com/bxr1nG/auth/commit/b7079ca1650c2ce73a08932f4df322fdf7d09781))


### Build System

* **package-lock.json:** update dependencies ([3f990e2](https://github.com/bxr1nG/auth/commit/3f990e2207756ac1ad73cf3c5a4e95091c079c9b))

### [1.1.15](https://github.com/bxr1nG/auth/compare/v1.1.14...v1.1.15) (2023-03-29)


### Bug Fixes

* **proxy/config:** use boolean type of cache property in config.yml instead of string ([d52654b](https://github.com/bxr1nG/auth/commit/d52654b80e7d8b1ebacb1a84e2c2799388db16c6))

### [1.1.14](https://github.com/bxr1nG/auth/compare/v1.1.13...v1.1.14) (2023-03-29)


### Features

* **proxy/config:** add cache property to config ([f3c773b](https://github.com/bxr1nG/auth/commit/f3c773be2953c7f8600e38789d87550633866db3))


### Bug Fixes

* **package-lock.json:** fix webpack vulnerability ([43d5429](https://github.com/bxr1nG/auth/commit/43d5429aa0485ce7102b9c83c5cc5d7044f32c9b))

### [1.1.13](https://github.com/bxr1nG/auth/compare/v1.1.12...v1.1.13) (2023-02-20)


### Bug Fixes

* **proxy:** do not cache index.html, testusers and environment on client ([c4953b8](https://github.com/bxr1nG/auth/commit/c4953b829c626e9075f20feb6749c2fa89c5e79e)), closes [#6](https://github.com/bxr1nG/auth/issues/6)


### Others

* **.versionrc.json:** record any type commits to CHANGELOG.md ([6c0abb4](https://github.com/bxr1nG/auth/commit/6c0abb4bc5183f575bfe04588c163884d7d17581))

### [1.1.12](https://github.com/bxr1nG/auth/compare/v1.1.11...v1.1.12) (2023-02-18)


### Features

* **cross-var:** add typescript ([0364884](https://github.com/bxr1nG/auth/commit/036488461c9238535a55a82cc4684a447d04f34a)), closes [#1](https://github.com/bxr1nG/auth/issues/1)


### Bug Fixes

* **cross-var:** add Babel ([4f9c063](https://github.com/bxr1nG/auth/commit/4f9c0632eb2e5ff07a75bc6ae3b4cdc89cfa5a89)), closes [#5](https://github.com/bxr1nG/auth/issues/5)
* **logstable:** fix sending requests while waiting search sync ([362a6d4](https://github.com/bxr1nG/auth/commit/362a6d455cc4a6ede8f4cdddd7012874b5c8dbf6))

### [1.1.11](https://github.com/bxr1nG/auth/compare/v1.1.10...v1.1.11) (2023-02-12)


### Features

* **ui:** create request builder ([df180f2](https://github.com/bxr1nG/auth/commit/df180f24ef5a9a6034b1eeaec1d60425374c2326)), closes [#4](https://github.com/bxr1nG/auth/issues/4)
* **ui:** start using react query for managing fetching data ([b9b0567](https://github.com/bxr1nG/auth/commit/b9b0567681fef223ef693e1bdbce1f2b71ce652f))


### Bug Fixes

* **api/getlogs:** use axios params instead of stringifying them manually ([70ff518](https://github.com/bxr1nG/auth/commit/70ff518a0342afe62997a433c592197d4dc86eb0))
* **api/login:** add headers to request ([7f9eeb4](https://github.com/bxr1nG/auth/commit/7f9eeb4c969fafa7e8022d027a54fffc6d38d389))
* **index.html:** fix front drop when using hot reload ([0be8be3](https://github.com/bxr1nG/auth/commit/0be8be37b386d3cf58b09736d85d426050bfeeec))
* **logstable:** fix unique rows keys problem ([b5a4607](https://github.com/bxr1nG/auth/commit/b5a4607bb59f43607745d0c2a4143dd5ef1bfba1))
* **proxy:** refactor config object ([7da0e2e](https://github.com/bxr1nG/auth/commit/7da0e2e9c18ad78acc9aaf13b551adb671981bbe)), closes [#3](https://github.com/bxr1nG/auth/issues/3)
* **ui/src/api:** rewrite login and logout fetches using axios ([a0fda58](https://github.com/bxr1nG/auth/commit/a0fda5887d0d8f5de3f50af8afb418277a746a4f))
* **ui:** use axios instead of fetch ([f37a4e0](https://github.com/bxr1nG/auth/commit/f37a4e03a2f622102369c9572c0080d0bb15339e))

### [1.1.10](https://github.com/bxr1nG/auth/compare/v1.1.9...v1.1.10) (2023-02-06)


### Bug Fixes

* add import order rules to ESLint ([222018b](https://github.com/bxr1nG/auth/commit/222018bf148e26f113a65b968df3c53b6c018a09))
* **config.ts:** return environment variables for backward compatibility ([eb86244](https://github.com/bxr1nG/auth/commit/eb86244fc28f0fce2ea45b2e6229981ff9217563)), closes [#2](https://github.com/bxr1nG/auth/issues/2)
* **proxy:** add check login middleware ([91dfe07](https://github.com/bxr1nG/auth/commit/91dfe07a35052fdcd10f3d997fdbb927101402b1))
* **proxy:** add strategy pattern for rights ([c6b7292](https://github.com/bxr1nG/auth/commit/c6b729238bd3c5743bda1fdd7266d4967767bcd5))
* **proxy:** change types names (remove I at the beginning) ([13c019c](https://github.com/bxr1nG/auth/commit/13c019cc10ce3abdf043b14404b5b12a01402337))
* **proxy:** create logs params parser ([6466209](https://github.com/bxr1nG/auth/commit/646620994b9948f5256fd3611b89c21e4bcdb87e))
* **proxy:** split management routes to files ([4346b76](https://github.com/bxr1nG/auth/commit/4346b764fd1344a26a3740ee9245223380fd6405))
* **proxy:** use config variable instead of __dirname ([b136318](https://github.com/bxr1nG/auth/commit/b1363187bbc1e27c1eb7e0819fe762f57c77536a))
* **strategies/rights:** add usage of generics to StrategyFactory ([574f5f8](https://github.com/bxr1nG/auth/commit/574f5f8fffb8a5119d881f32cea656ce0d8599ba))
* **ui:** add lazy load of routes ([8863560](https://github.com/bxr1nG/auth/commit/8863560834662e5565e50daafb54089f2ed5c653))

### [1.1.9](https://github.com/bxr1nG/auth/compare/v1.1.8...v1.1.9) (2023-02-01)


### Features

* add usage of config YAML file ([bc3c71f](https://github.com/bxr1nG/auth/commit/bc3c71fddc7a90b6422635edc28c324329279e29))
* **proxy:** use extra fields from config ([1d25526](https://github.com/bxr1nG/auth/commit/1d255262adbd0636a8a25398b203c05be9682295))
* **ui:** get extra fields from server and use them instead of hardcoded extra fields ([34acc47](https://github.com/bxr1nG/auth/commit/34acc47a282daa89fac7477745b8eb1f39d38981))


### Bug Fixes

* add responsibility to extra fields ([e51d7af](https://github.com/bxr1nG/auth/commit/e51d7af33983b75c72f35d66461fb481fef4a1ae))
* **changelog.md:** fix bug with updating CHANGELOG.md file ([6cac05b](https://github.com/bxr1nG/auth/commit/6cac05b8e9af425f65338b7b461fd82ee3fc7670))
* create library that unifies access to variables from npm scripts ([91b1508](https://github.com/bxr1nG/auth/commit/91b1508f042454102c0bb3cf14f8e14aba75362f))
* **dockerhub.md:** update DOCKERHUB.md file ([aaf1207](https://github.com/bxr1nG/auth/commit/aaf12077a8f5e1f23b47bb8ef24418953b0d7502))
* **infobutton:** add scroll to long strings in info table ([a13f43a](https://github.com/bxr1nG/auth/commit/a13f43ac435391042aa0fe087ddf1a65a44c217a))
* **infobutton:** disable button when path is root and hide columns in table if they are empty ([d918b04](https://github.com/bxr1nG/auth/commit/d918b04fcec9192f14caf771e42bf3ee027a4466))
* **logstable:** refactor and divide сode into components ([d0e0c0c](https://github.com/bxr1nG/auth/commit/d0e0c0c2f4b8e6fc7dcf4156d084d42e49b1267b))
* **management.routes.ts:** remove comment ([137d877](https://github.com/bxr1nG/auth/commit/137d877a924f1e382a488b26757ca0aa63bc4a99))
* **proxy:** remove unnecessary config variables ([e37c123](https://github.com/bxr1nG/auth/commit/e37c1237c47c51eb38a1e22fe9d757bc1ee9cce2))
* remove dotenv packages ([08820df](https://github.com/bxr1nG/auth/commit/08820df7e28f6688c253d6b4c0536cdf9cb53b75))
* **statefield:** change possibly used in config variables names ([2b76c58](https://github.com/bxr1nG/auth/commit/2b76c58779290207590cfe7f456316768ba3d6cb))
* **ui:** add fade animations for modals ([d5785ee](https://github.com/bxr1nG/auth/commit/d5785ee3123c8e4a488abfb7b715c5a6e54b004c))

### [1.1.8](https://github.com/bxr1nG/auth/compare/v1.1.7...v1.1.8) (2023-01-25)


### Features

* add favicon ([b0befd2](https://github.com/bxr1nG/auth/commit/b0befd26ae98cdfd0ab49ab6f04b434a3520d880))
* **logstable:** add search field to Logs table ([d29c5d9](https://github.com/bxr1nG/auth/commit/d29c5d9358b6ed16778e3ae8ae404a2b3b732aa5))


### Bug Fixes

* add name to filter by client menu in Logs table ([4962e95](https://github.com/bxr1nG/auth/commit/4962e952383dad644d722c142f0dd9d53116bd68))
* add server side pagination to Logs table ([3863ab0](https://github.com/bxr1nG/auth/commit/3863ab02e6682be70f4b5f0fa99d0b484f91c296))
* **changelog.md:** fix CHANGELOG.md file ([4e89a23](https://github.com/bxr1nG/auth/commit/4e89a23a0290fc169149cf5d081cc2b9c19a5ba3))
* **historybutton:** add fixed width for table columns ([2e45a0c](https://github.com/bxr1nG/auth/commit/2e45a0ca58a0d65a80ac1f867a5ea037107eb31a))
* **historybutton:** add max height for permissions and roles containers in history table ([0e47128](https://github.com/bxr1nG/auth/commit/0e4712827eb2d3dcfe77e457dfb696fa5840fa46))
* **index.html:** add mobile responsibility ([2aa33c9](https://github.com/bxr1nG/auth/commit/2aa33c96868738537845f0e704b492a395d6a529))
* **infobutton:** add fixed width for table columns ([c8f7a66](https://github.com/bxr1nG/auth/commit/c8f7a664222b9fdbb2b3e797ebdd8a6032ce650f))
* **listener:** remove ports value from dockerhub readme ([97d7bd1](https://github.com/bxr1nG/auth/commit/97d7bd17861db3004bf56ec9f97620e6b29f91bb))
* **loginform:** fix default context bug ([62466f9](https://github.com/bxr1nG/auth/commit/62466f92b24bcbf1396dcdee784123bb5ce618fa))
* **logstable:** add fixed width for table columns ([e2f47fc](https://github.com/bxr1nG/auth/commit/e2f47fcdec08f32ccc51566df5ba712300859a47))
* **logstable:** decode URL string ([934b320](https://github.com/bxr1nG/auth/commit/934b32040a827935c7189b65317a89c6bb618ddd))
* **logstable:** fix client select display condition ([b0e0a8d](https://github.com/bxr1nG/auth/commit/b0e0a8d961e0e0d4cbb5746d737622095094515a))
* **management.routes.ts:** decode URI before filter by search query ([022bcf6](https://github.com/bxr1nG/auth/commit/022bcf6b6771153461aa722154bf15bf43df6c12))
* **ui:** remove domain name from requests ([5ecbcb3](https://github.com/bxr1nG/auth/commit/5ecbcb3e97f94f27ba3604533fc2097155188864))
* use static build of ui in dev mode ([9405989](https://github.com/bxr1nG/auth/commit/94059898c0f3c8f36de8a6453768da29dc48bf8c))

### [1.1.7](https://github.com/bxr1nG/auth/compare/v1.1.6...v1.1.7) (2023-01-25)


### Features

* **listener:** separate listener project to different docker image ([b61cf9a](https://github.com/bxr1nG/auth/commit/b61cf9ad48b4e94b001bd616111258a4a5836e43))
* remove listener project from docker build, add graceful shutdown ([3f3a149](https://github.com/bxr1nG/auth/commit/3f3a149e382ed5308dd44f7f8173d1919c7d496d))


### Bug Fixes

* add default path for Login button ([a4dd7dd](https://github.com/bxr1nG/auth/commit/a4dd7ddc8734bde44d70eb3e8f67b000ef1fc93b))

### [1.1.6](https://github.com/bxr1nG/auth/compare/v1.1.5...v1.1.6) (2023-01-25)


### Features

* **proxy:** add client field to logs ([26814d7](https://github.com/bxr1nG/auth/commit/26814d776cee4a6dde8797ab30777027bdfd1086))
* **ui:** add filter by client to logs table ([9e2b82e](https://github.com/bxr1nG/auth/commit/9e2b82e717f1078a86152dc68df15d37be4944cb))


### Bug Fixes

* add redirect to requested path while not authorized ([fd18c91](https://github.com/bxr1nG/auth/commit/fd18c91b52a68e82b1fb2827abfb1a640b71d1a2))
* **logstable:** fix bug with counting rows in Logs table ([c3f8781](https://github.com/bxr1nG/auth/commit/c3f87819179f46a878897a95dd9b7664ae0269be))
* **logsview:** fix bug with logs page and table height, add pagination ([81eba1c](https://github.com/bxr1nG/auth/commit/81eba1c41e333497b01105071fd08ee0bc69bf32))
* **proxy:** fix session middleware and dockerhub.md file ([a4054de](https://github.com/bxr1nG/auth/commit/a4054dead67284785499c4a4bf96832914405dba))

### [1.1.5](https://github.com/bxr1nG/auth/compare/v1.1.4...v1.1.5) (2023-01-25)


### Features

* **proxy:** add browser session scoped mode for login rights ([cc87997](https://github.com/bxr1nG/auth/commit/cc87997295b5f1a9f9025aabcf657e4b8c166b68))

### [1.1.4](https://github.com/bxr1nG/auth/compare/v1.1.3...v1.1.4) (2023-01-25)


### Features

* add URL parser and modal for logs table ([74d3ffb](https://github.com/bxr1nG/auth/commit/74d3ffb5911dbc09271f455838c4d01c52a1d178))

### [1.1.3](https://github.com/bxr1nG/auth/compare/v1.1.2...v1.1.3) (2023-01-25)


### Bug Fixes

* **historybutton:** change history modal styles ([e504d62](https://github.com/bxr1nG/auth/commit/e504d62668f7f8dd48338f331916f3f05b693676))
* **loginform:** add validation of semicolons in permissions field ([1c263bd](https://github.com/bxr1nG/auth/commit/1c263bdc9316cfc48e8bdc686f69ae0b4898d6fd))
* **loginform:** fix input in permissions field ([5ba5574](https://github.com/bxr1nG/auth/commit/5ba5574983b15956eaaab7e087a313ca31c62573))
* **loginform:** fix state 'out of range' warning when using values from history ([8247cda](https://github.com/bxr1nG/auth/commit/8247cdab75b52934fee6d8e0fb60b61bfd182bdd))
* **logstable:** change logs table styles, add copy and open buttons ([041b6d5](https://github.com/bxr1nG/auth/commit/041b6d5e3100f48917947730e5019dc74bbc8e2c))

### [1.1.2](https://github.com/bxr1nG/auth/compare/v1.1.1...v1.1.2) (2023-01-25)


### Features

* **loginform:** save rarely used fields in localStorage ([a794181](https://github.com/bxr1nG/auth/commit/a79418147613238815aa030a09a2495a64793c18))

### [1.1.1](https://github.com/bxr1nG/auth/compare/v1.1.0...v1.1.1) (2023-01-25)


### Bug Fixes

* change number fields type to string ([d8a48dd](https://github.com/bxr1nG/auth/commit/d8a48dd285eaec025e3315717cdfafab9b64ee6f))
* **cookiescleaner:** fix cookie cleanup ([d4e5b46](https://github.com/bxr1nG/auth/commit/d4e5b46fa0ac5c24f87a3107702640c7380af1f9))
* **loginform:** change IAMUserID field width ([574f656](https://github.com/bxr1nG/auth/commit/574f6563c662a04c76af87fb81207d074357ed69))
* **loginform:** change styles for state menu and history button line ([763a006](https://github.com/bxr1nG/auth/commit/763a006e067660f5415c813a6c609931eba2c359))
* **loginform:** create an accordion and move fields after divider into it ([ed803bf](https://github.com/bxr1nG/auth/commit/ed803bfd1246a0ad258a8784d82b7a54cc059422))
* **loginform:** replace IAMUserID field ([60825a0](https://github.com/bxr1nG/auth/commit/60825a042b7d5b6722f28d4a47e1a32aafcc4b9f))
* **management:** fix bug with redirect to login page on development mode ([0cc1f8d](https://github.com/bxr1nG/auth/commit/0cc1f8daf1a2ca286139b99381bc859933a935df))
* **permissionsfield:** disable spellcheck on permissions field ([fc8d96c](https://github.com/bxr1nG/auth/commit/fc8d96cfbed07fe8161bb82eaa282d91a460153f))
* **proxy:** change onstart console logs ([c3f5a02](https://github.com/bxr1nG/auth/commit/c3f5a023de781843e50c0fc9384e881bdbd7fc75))
* **statefield:** add default first name for values from testusers.ini file ([241775c](https://github.com/bxr1nG/auth/commit/241775c22ee1a4f173ada7cbd78928259794952f))
* **statefield:** remove Password1 value from roles in state menu ([b4de94c](https://github.com/bxr1nG/auth/commit/b4de94c586dc767b8302eb6d15f923cb575c686f))

## [1.1.0](https://github.com/bxr1nG/auth/compare/v1.0.3...v1.1.0) (2023-01-25)

### [1.0.3](https://github.com/bxr1nG/auth/compare/v1.0.2...v1.0.3) (2023-01-25)


### ⚠ BREAKING CHANGES

* **proxy:** Now there is no need to fill out all the fields of Login form
* **ui:** Now there is no need to fill out all the fields of Login form
* **loginform:** State select menu no longer shows values saved in localStorage

### Features

* **loginform:** add History modal ([b987543](https://github.com/bxr1nG/auth/commit/b98754302169e2f3d56b5b2fe64795b162deb358))
* **loginform:** remove history values from state select menu ([98d888a](https://github.com/bxr1nG/auth/commit/98d888a53c61f5004a71af22e5d5fd8f4d0feb59))
* **proxy:** make fields optional ([ee65824](https://github.com/bxr1nG/auth/commit/ee65824ad9cabbdbe416442626285cce917b81c1))
* **ui:** make fields optional ([74c0dbe](https://github.com/bxr1nG/auth/commit/74c0dbe2ff6de181655f0223b08b1a1aeaa23a9c))


### Bug Fixes

* **loginform:** add permissions sorting when displaying ([1f56748](https://github.com/bxr1nG/auth/commit/1f567482872e7cb77ac60866e9d61578acac9214))
* **loginform:** change order of fields ([500e11c](https://github.com/bxr1nG/auth/commit/500e11c3bea1f66ab7b69ea938383f0486d19b30))
* **loginform:** optimize process of inserting a new value into history ([b8b1051](https://github.com/bxr1nG/auth/commit/b8b10511444813ccc3ce14436f628be9f02d0d1a))
* **statefield:** change text format in select menu ([acbcba2](https://github.com/bxr1nG/auth/commit/acbcba26b8231e4ecc4b9390df7f8ee0134d8159))

### [1.0.2](https://github.com/bxr1nG/auth/compare/v1.0.1...v1.0.2) (2022-12-29)


### Bug Fixes

* **loginform:** move reverse formatting of permissions from onChange to onSubmit function ([d81530b](https://github.com/bxr1nG/auth/commit/d81530b51e4e88ec7d2c3f3714f674fb89165e09))

### [1.0.1](https://github.com/bxr1nG/auth/compare/v1.0.0...v1.0.1) (2022-12-28)


### Bug Fixes

* **loginform:** remove Logout button from Login form ([408b1cb](https://github.com/bxr1nG/auth/commit/408b1cbadb68e3b2dac92b06238e1eee26e19ac1))
