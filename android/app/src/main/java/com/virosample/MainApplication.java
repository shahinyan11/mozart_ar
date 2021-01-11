package at.ffx.mozart_ar;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.reactnativecommunity.rctaudiotoolkit.AudioPackage;
import com.reactnativecommunity.picker.RNCPickerPackage;

import com.punarinta.RNSoundLevel.RNSoundLevel;
import com.reactnativecommunity.geolocation.GeolocationPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.reactnativecommunity.netinfo.NetInfoPackage;
import com.horcrux.svg.SvgPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.cmcewen.blurview.BlurViewPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.th3rdwave.safeareacontext.SafeAreaContextPackage;
import org.reactnative.maskedview.RNCMaskedViewPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.swmansion.reanimated.ReanimatedPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import com.viromedia.bridge.ReactViroPackage;
import com.facebook.soloader.SoLoader;
import org.reactnative.camera.RNCameraPackage;
import com.airbnb.android.react.maps.MapsPackage;


import java.util.Arrays;
import java.util.List;

import com.reactnativecommunity.rnpermissions.RNPermissionsPackage;
import com.reactcommunity.rndatetimepicker.RNDateTimePickerPackage;



public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
            new AudioPackage(),
            new RNCPickerPackage(),
            new RNDateTimePickerPackage(),
            new RNSoundLevel(),
            new GeolocationPackage(),
            new RNDeviceInfo(),
            new NetInfoPackage(),
        new SvgPackage(),
        new MapsPackage(),
        new VectorIconsPackage(),
        new BlurViewPackage(),
        new LinearGradientPackage(),
        new SafeAreaContextPackage(),
        new RNCMaskedViewPackage(),
        new RNGestureHandlerPackage(),
        new ReanimatedPackage(),
        new ReactViroPackage(ReactViroPackage.ViroPlatform.valueOf(BuildConfig.VR_PLATFORM)),
        new RNPermissionsPackage(),
        new RNCameraPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
    }

}
