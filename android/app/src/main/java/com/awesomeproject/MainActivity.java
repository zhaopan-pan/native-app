package com.awesomeproject;

import com.facebook.react.ReactActivity;
import android.os.Bundle;  //add 
import org.devio.rn.splashscreen.SplashScreen; 

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "AwesomeProject";
    }


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this,false);   //add
        super.onCreate(savedInstanceState);
    }

}
