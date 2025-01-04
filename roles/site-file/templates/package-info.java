{{ SITE_LICENSE | default('') }}
@ModuleGen(name="{{ SITE_NAME | replace('.', '-') }}", groupPackage="{{ SITE_JAVA_PACKAGE }}")
package {{ SITE_JAVA_PACKAGE }};

import io.vertx.codegen.annotations.ModuleGen;
