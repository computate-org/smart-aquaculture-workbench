package {{ SITE_MAIN_VERTICLE_PACKAGE }};

import java.util.Map.Entry;

import org.computate.vertx.openapi.ComputateOAuth2AuthHandlerImpl;
import {{ SITE_CONFIG_KEYS_PACKAGE }}.ConfigKeys;
import {{ SITE_REQUEST_PACKAGE }}.SiteRequest;
import {{ SITE_USER_PACKAGE }}.SiteUser;
import {{ SITE_USER_PACKAGE }}.SiteUserEnUSApiServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import io.vertx.core.Future;
import io.vertx.core.Promise;
import io.vertx.core.Vertx;
import io.vertx.core.buffer.Buffer;
import io.vertx.core.http.HttpResponseExpectation;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.api.service.ServiceRequest;
import io.vertx.ext.web.client.HttpRequest;
import io.vertx.ext.web.client.WebClient;
import io.vertx.kafka.client.consumer.KafkaConsumer;

public class SiteRoutes {
	protected static final Logger LOG = LoggerFactory.getLogger(SiteRoutes.class);
  
  public static void routes(Router router, ComputateOAuth2AuthHandlerImpl oauth2AuthHandler, JsonObject config, WebClient webClient, SiteUserEnUSApiServiceImpl apiSiteUser) {
  }

  public static Future<Void> kafkaConsumer(Vertx vertx, KafkaConsumer<String, String> consumer, JsonObject config) {
    Promise<Void> promise = Promise.promise();
    try {
      promise.complete();
    } catch(Exception ex) {
      LOG.error("Unable to configure Kafka consumers. ", ex);
      promise.fail(ex);
    }

    return promise.future();
  }
}
