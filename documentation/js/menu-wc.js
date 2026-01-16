'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">03-validation-and-pipes documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                                <li class="link">
                                    <a href="overview.html" data-type="chapter-link">
                                        <span class="icon ion-ios-keypad"></span>Overview
                                    </a>
                                </li>

                            <li class="link">
                                <a href="index.html" data-type="chapter-link">
                                    <span class="icon ion-ios-paper"></span>
                                        README
                                </a>
                            </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>

                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-eb17dcc897e105de043ab2d371da27b96957f5f089eb20d9212263e8b1535623faa251268f232e749ae2efdbe30712a4934db2ff44daa0860de51b477abff436"' : 'data-bs-target="#xs-controllers-links-module-AppModule-eb17dcc897e105de043ab2d371da27b96957f5f089eb20d9212263e8b1535623faa251268f232e749ae2efdbe30712a4934db2ff44daa0860de51b477abff436"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-eb17dcc897e105de043ab2d371da27b96957f5f089eb20d9212263e8b1535623faa251268f232e749ae2efdbe30712a4934db2ff44daa0860de51b477abff436"' :
                                            'id="xs-controllers-links-module-AppModule-eb17dcc897e105de043ab2d371da27b96957f5f089eb20d9212263e8b1535623faa251268f232e749ae2efdbe30712a4934db2ff44daa0860de51b477abff436"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-eb17dcc897e105de043ab2d371da27b96957f5f089eb20d9212263e8b1535623faa251268f232e749ae2efdbe30712a4934db2ff44daa0860de51b477abff436"' : 'data-bs-target="#xs-injectables-links-module-AppModule-eb17dcc897e105de043ab2d371da27b96957f5f089eb20d9212263e8b1535623faa251268f232e749ae2efdbe30712a4934db2ff44daa0860de51b477abff436"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-eb17dcc897e105de043ab2d371da27b96957f5f089eb20d9212263e8b1535623faa251268f232e749ae2efdbe30712a4934db2ff44daa0860de51b477abff436"' :
                                        'id="xs-injectables-links-module-AppModule-eb17dcc897e105de043ab2d371da27b96957f5f089eb20d9212263e8b1535623faa251268f232e749ae2efdbe30712a4934db2ff44daa0860de51b477abff436"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-90377a3827508cc58202b6200e65b5953d58a0e6813de32b515f351ec88a739dc87f4feb996d5bbc5c1559858b7cb8f2daaf828d4dd8aae53b4dde63b4647abd"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-90377a3827508cc58202b6200e65b5953d58a0e6813de32b515f351ec88a739dc87f4feb996d5bbc5c1559858b7cb8f2daaf828d4dd8aae53b4dde63b4647abd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-90377a3827508cc58202b6200e65b5953d58a0e6813de32b515f351ec88a739dc87f4feb996d5bbc5c1559858b7cb8f2daaf828d4dd8aae53b4dde63b4647abd"' :
                                            'id="xs-controllers-links-module-AuthModule-90377a3827508cc58202b6200e65b5953d58a0e6813de32b515f351ec88a739dc87f4feb996d5bbc5c1559858b7cb8f2daaf828d4dd8aae53b4dde63b4647abd"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-90377a3827508cc58202b6200e65b5953d58a0e6813de32b515f351ec88a739dc87f4feb996d5bbc5c1559858b7cb8f2daaf828d4dd8aae53b4dde63b4647abd"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-90377a3827508cc58202b6200e65b5953d58a0e6813de32b515f351ec88a739dc87f4feb996d5bbc5c1559858b7cb8f2daaf828d4dd8aae53b4dde63b4647abd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-90377a3827508cc58202b6200e65b5953d58a0e6813de32b515f351ec88a739dc87f4feb996d5bbc5c1559858b7cb8f2daaf828d4dd8aae53b4dde63b4647abd"' :
                                        'id="xs-injectables-links-module-AuthModule-90377a3827508cc58202b6200e65b5953d58a0e6813de32b515f351ec88a739dc87f4feb996d5bbc5c1559858b7cb8f2daaf828d4dd8aae53b4dde63b4647abd"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostModule.html" data-type="entity-link" >PostModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostModule-35a24ae47165509472163879b46e88667fb2e4202250f9c4fed4b23b2865c19f6f130e18a0cafa0d3b24d1870cf9b49b5934da9537b2b2e8117430cc7c298d46"' : 'data-bs-target="#xs-controllers-links-module-PostModule-35a24ae47165509472163879b46e88667fb2e4202250f9c4fed4b23b2865c19f6f130e18a0cafa0d3b24d1870cf9b49b5934da9537b2b2e8117430cc7c298d46"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostModule-35a24ae47165509472163879b46e88667fb2e4202250f9c4fed4b23b2865c19f6f130e18a0cafa0d3b24d1870cf9b49b5934da9537b2b2e8117430cc7c298d46"' :
                                            'id="xs-controllers-links-module-PostModule-35a24ae47165509472163879b46e88667fb2e4202250f9c4fed4b23b2865c19f6f130e18a0cafa0d3b24d1870cf9b49b5934da9537b2b2e8117430cc7c298d46"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostModule-35a24ae47165509472163879b46e88667fb2e4202250f9c4fed4b23b2865c19f6f130e18a0cafa0d3b24d1870cf9b49b5934da9537b2b2e8117430cc7c298d46"' : 'data-bs-target="#xs-injectables-links-module-PostModule-35a24ae47165509472163879b46e88667fb2e4202250f9c4fed4b23b2865c19f6f130e18a0cafa0d3b24d1870cf9b49b5934da9537b2b2e8117430cc7c298d46"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostModule-35a24ae47165509472163879b46e88667fb2e4202250f9c4fed4b23b2865c19f6f130e18a0cafa0d3b24d1870cf9b49b5934da9537b2b2e8117430cc7c298d46"' :
                                        'id="xs-injectables-links-module-PostModule-35a24ae47165509472163879b46e88667fb2e4202250f9c4fed4b23b2865c19f6f130e18a0cafa0d3b24d1870cf9b49b5934da9537b2b2e8117430cc7c298d46"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-fec929d815255d2b6ad572f55e3e600bbba77ed38b7d53369228bf335800dade7a79e676d23190921e85a67369cf9b11967eaec1428e36e49f57f29693ae91de"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-fec929d815255d2b6ad572f55e3e600bbba77ed38b7d53369228bf335800dade7a79e676d23190921e85a67369cf9b11967eaec1428e36e49f57f29693ae91de"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-fec929d815255d2b6ad572f55e3e600bbba77ed38b7d53369228bf335800dade7a79e676d23190921e85a67369cf9b11967eaec1428e36e49f57f29693ae91de"' :
                                            'id="xs-controllers-links-module-UsersModule-fec929d815255d2b6ad572f55e3e600bbba77ed38b7d53369228bf335800dade7a79e676d23190921e85a67369cf9b11967eaec1428e36e49f57f29693ae91de"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-fec929d815255d2b6ad572f55e3e600bbba77ed38b7d53369228bf335800dade7a79e676d23190921e85a67369cf9b11967eaec1428e36e49f57f29693ae91de"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-fec929d815255d2b6ad572f55e3e600bbba77ed38b7d53369228bf335800dade7a79e676d23190921e85a67369cf9b11967eaec1428e36e49f57f29693ae91de"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-fec929d815255d2b6ad572f55e3e600bbba77ed38b7d53369228bf335800dade7a79e676d23190921e85a67369cf9b11967eaec1428e36e49f57f29693ae91de"' :
                                        'id="xs-injectables-links-module-UsersModule-fec929d815255d2b6ad572f55e3e600bbba77ed38b7d53369228bf335800dade7a79e676d23190921e85a67369cf9b11967eaec1428e36e49f57f29693ae91de"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});