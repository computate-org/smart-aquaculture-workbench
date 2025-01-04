{{ SITE_LICENSE | default('') }}
package {{ SITE_CONFIG_KEYS_PACKAGE }};

import org.computate.vertx.config.ComputateConfigKeys;

/**
 * Keyword: classSimpleNameConfigKeys
 */
public class ConfigKeys extends ComputateConfigKeys {
{{ CONFIG_KEYS | default('') }}}
