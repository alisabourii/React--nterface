<div class="btn-group bottom-inner-btn d-flex">
                <button id="geriyedonbutton_rc" title="Geri" onclick="GERIYE_DON();event.stopPropagation();" type="button" class="bottom-btn">
                    <i class="ion-ios-arrow-left"></i>
                </button>
                <button id="ileriyegitbutton_bg" title="İleri" onclick="ILERIYE_GIT();event.stopPropagation();" type="button" class="bottom-btn hidden-md-down">
                    <i class="ion-ios-arrow-right"></i>
                </button>

                <button title="Yenile" onclick="SAYFA_YENILE();event.stopPropagation();" type="button" class="bottom-btn">
                    <i class="ion-ios-refresh-empty"></i>
                </button>
                <button title="Tam Ekran" onclick="openFullscreen()" id="fullscreenBtn" type="button" class="bottom-btn hidden-md-down">
                    <i class="ion-arrow-expand"></i>
                </button>
                <button title="Tam Ekrandan Çık" onclick="closeFullscreen()" style="display: none" id="nonfullscreenBtn" type="button" class="bottom-btn hidden-md-down">
                    <i class="ion-arrow-shrink"></i>
                </button>
                <button title="Masaüstü (Ctrl   1-2-3-4-Tab)" id="multiscreenbtn" type="button" class="bottom-btn hidden-md-down" onclick="multiDekstopPreview();">
                    <i class="ion-android-desktop">
                        <span></span>
                    </i>
                </button>
  </div>
