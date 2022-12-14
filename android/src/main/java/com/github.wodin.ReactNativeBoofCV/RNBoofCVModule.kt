package com.github.wodin.ReactNativeBoofCV

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

import boofcv.BoofVersion

class RNBoofCVModule : Module() {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  override fun definition() = ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('RNBoofCV')` in JavaScript.
    Name("RNBoofCV")

    // Sets constant properties on the module. Can take a dictionary or a closure that returns a dictionary.
    Constants(
      "PI" to Math.PI,
      "E" to Math.E,
      "BoofCV_Version" to BoofVersion.VERSION,
      "BoofCV_GIT_DATE" to BoofVersion.GIT_DATE,
      "BoofCV_GIT_SHA" to BoofVersion.GIT_SHA
    )

    // Defines event names that the module can send to JavaScript.
    Events("onChange")

    // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
    Function("hello") {
      "Hello world! 👋"
    }

    // Defines a JavaScript function that always returns a Promise and whose native code
    // is by default dispatched on the different thread than the JavaScript runtime runs on.
    AsyncFunction("setValueAsync") { value: String ->
      // Send an event to JavaScript.
      sendEvent("onChange", mapOf(
        "value" to value
      ))
    }

    // Enables the module to be used as a view manager. The view manager definition is built from
    // the definition components used in the closure passed to viewManager.
    // Definition components that are accepted as part of the view manager definition: `View`, `Prop`.
    ViewManager {
      // Defines the factory creating a native view when the module is used as a view.
      View { context -> 
        RNBoofCVView(context) 
      }

      // Defines a setter for the `name` prop.
      Prop("name") { view: RNBoofCVView, prop: String ->
        println(prop)
      }
    }
  }
}
