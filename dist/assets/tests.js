'use strict';

define("projet-car/tests/integration/components/home-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | home', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "T3/Cbrq7",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"home\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "H0m+Aegy",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"home\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("projet-car/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/home.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/home.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/changepassword.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/changepassword.js should pass ESLint\n\n');
  });
  QUnit.test('routes/confirm.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/confirm.js should pass ESLint\n\n');
  });
  QUnit.test('routes/contact.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/contact.js should pass ESLint\n\n');
  });
  QUnit.test('routes/home.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/home.js should pass ESLint\n\n');
  });
  QUnit.test('routes/login.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/login.js should pass ESLint\n\n');
  });
  QUnit.test('routes/organiser.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/organiser.js should pass ESLint\n\n');
  });
  QUnit.test('routes/services.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/services.js should pass ESLint\n\n');
  });
});
define("projet-car/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('projet-car/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'projet-car/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('projet-car/templates/changepassword.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'projet-car/templates/changepassword.hbs should pass TemplateLint.\n\nprojet-car/templates/changepassword.hbs\n  5:2  error  Incorrect indentation for `<div>` beginning at L5:C2. Expected `<div>` to be at an indentation of 4 but was found at 2.  block-indentation\n  10:3  error  Incorrect indentation for `<div>` beginning at L10:C3. Expected `<div>` to be at an indentation of 4 but was found at 3.  block-indentation\n  14:10  error  Incorrect indentation for `div` beginning at L10:C3. Expected `</div>` ending at L14:C10 to be at an indentation of 3 but was found at 4.  block-indentation\n  11:6  error  Incorrect indentation for `<button>` beginning at L11:C6. Expected `<button>` to be at an indentation of 5 but was found at 6.  block-indentation\n');
  });
  QUnit.test('projet-car/templates/confirm.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'projet-car/templates/confirm.hbs should pass TemplateLint.\n\nprojet-car/templates/confirm.hbs\n  3:4  error  Incorrect indentation for `\nun mail a \xE9t\xE9 envoy\xE9 \xE0 votre adresse\n` beginning at L3:C4. Expected `\nun mail a \xE9t\xE9 envoy\xE9 \xE0 votre adresse\n` to be at an indentation of 2 but was found at 0.  block-indentation\n');
  });
  QUnit.test('projet-car/templates/contact.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'projet-car/templates/contact.hbs should pass TemplateLint.\n\nprojet-car/templates/contact.hbs\n  71:7  error  Incorrect indentation for `form` beginning at L3:C2. Expected `</form>` ending at L71:C7 to be at an indentation of 2 but was found at 0.  block-indentation\n  4:2  error  Incorrect indentation for `<div>` beginning at L4:C2. Expected `<div>` to be at an indentation of 4 but was found at 2.  block-indentation\n  9:2  error  Incorrect indentation for `<div>` beginning at L9:C2. Expected `<div>` to be at an indentation of 4 but was found at 2.  block-indentation\n  13:2  error  Incorrect indentation for `<div>` beginning at L13:C2. Expected `<div>` to be at an indentation of 4 but was found at 2.  block-indentation\n  18:2  error  Incorrect indentation for `<div>` beginning at L18:C2. Expected `<div>` to be at an indentation of 4 but was found at 2.  block-indentation\n  22:2  error  Incorrect indentation for `<div>` beginning at L22:C2. Expected `<div>` to be at an indentation of 4 but was found at 2.  block-indentation\n  27:2  error  Incorrect indentation for `<p>` beginning at L27:C2. Expected `<p>` to be at an indentation of 4 but was found at 2.  block-indentation\n  29:2  error  Incorrect indentation for `<div>` beginning at L29:C2. Expected `<div>` to be at an indentation of 4 but was found at 2.  block-indentation\n  34:2  error  Incorrect indentation for `<div>` beginning at L34:C2. Expected `<div>` to be at an indentation of 4 but was found at 2.  block-indentation\n  41:7  error  Incorrect indentation for `<input>` beginning at L41:C7. Expected `<input>` to be at an indentation of 6 but was found at 7.  block-indentation\n');
  });
  QUnit.test('projet-car/templates/devis.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'projet-car/templates/devis.hbs should pass TemplateLint.\n\nprojet-car/templates/devis.hbs\n  59:2  error  Incorrect indentation for `<div>` beginning at L59:C2. Expected `<div>` to be at an indentation of 4 but was found at 2.  block-indentation\n  67:2  error  Incorrect indentation for `<div>` beginning at L67:C2. Expected `<div>` to be at an indentation of 4 but was found at 2.  block-indentation\n  123:2  error  Incorrect indentation for `<div>` beginning at L123:C2. Expected `<div>` to be at an indentation of 4 but was found at 2.  block-indentation\n  131:2  error  Incorrect indentation for `<div>` beginning at L131:C2. Expected `<div>` to be at an indentation of 4 but was found at 2.  block-indentation\n  145:0  error  Incorrect indentation for `<input>` beginning at L145:C0. Expected `<input>` to be at an indentation of 4 but was found at 0.  block-indentation\n  12:4  error  Self-closing a void element is redundant  self-closing-void-elements\n  15:4  error  Self-closing a void element is redundant  self-closing-void-elements\n  17:4  error  Self-closing a void element is redundant  self-closing-void-elements\n  22:4  error  Self-closing a void element is redundant  self-closing-void-elements\n  25:4  error  Self-closing a void element is redundant  self-closing-void-elements\n  51:8  error  Self-closing a void element is redundant  self-closing-void-elements\n  56:6  error  Self-closing a void element is redundant  self-closing-void-elements\n  61:4  error  Self-closing a void element is redundant  self-closing-void-elements\n  64:4  error  Self-closing a void element is redundant  self-closing-void-elements\n  69:4  error  Self-closing a void element is redundant  self-closing-void-elements\n  72:4  error  Self-closing a void element is redundant  self-closing-void-elements\n  78:58  error  Self-closing a void element is redundant  self-closing-void-elements\n  115:8  error  Self-closing a void element is redundant  self-closing-void-elements\n  120:6  error  Self-closing a void element is redundant  self-closing-void-elements\n  125:4  error  Self-closing a void element is redundant  self-closing-void-elements\n  128:4  error  Self-closing a void element is redundant  self-closing-void-elements\n  133:4  error  Self-closing a void element is redundant  self-closing-void-elements\n  136:4  error  Self-closing a void element is redundant  self-closing-void-elements\n  142:58  error  Self-closing a void element is redundant  self-closing-void-elements\n');
  });
  QUnit.test('projet-car/templates/home.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'projet-car/templates/home.hbs should pass TemplateLint.\n\nprojet-car/templates/home.hbs\n  28:0  error  Incorrect indentation for `<div>` beginning at L28:C0. Expected `<div>` to be at an indentation of 2 but was found at 0.  block-indentation\n  32:6  error  Self-closing a void element is redundant  self-closing-void-elements\n  35:6  error  Self-closing a void element is redundant  self-closing-void-elements\n');
  });
  QUnit.test('projet-car/templates/login.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'projet-car/templates/login.hbs should pass TemplateLint.\n\nprojet-car/templates/login.hbs\n  4:2  error  Incorrect indentation for `<h3>` beginning at L4:C2. Expected `<h3>` to be at an indentation of 4 but was found at 2.  block-indentation\n');
  });
  QUnit.test('projet-car/templates/organiser.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'projet-car/templates/organiser.hbs should pass TemplateLint.\n\nprojet-car/templates/organiser.hbs\n  10:4  error  Self-closing a void element is redundant  self-closing-void-elements\n  13:4  error  Self-closing a void element is redundant  self-closing-void-elements\n  15:4  error  Self-closing a void element is redundant  self-closing-void-elements\n  20:4  error  Self-closing a void element is redundant  self-closing-void-elements\n  23:4  error  Self-closing a void element is redundant  self-closing-void-elements\n  49:8  error  Self-closing a void element is redundant  self-closing-void-elements\n  54:6  error  Self-closing a void element is redundant  self-closing-void-elements\n  63:6  error  Self-closing a void element is redundant  self-closing-void-elements\n  66:6  error  Self-closing a void element is redundant  self-closing-void-elements\n  71:6  error  Self-closing a void element is redundant  self-closing-void-elements\n  74:6  error  Self-closing a void element is redundant  self-closing-void-elements\n  80:58  error  Self-closing a void element is redundant  self-closing-void-elements\n  117:6  error  Self-closing a void element is redundant  self-closing-void-elements\n  122:4  error  Self-closing a void element is redundant  self-closing-void-elements\n  135:4  error  Self-closing a void element is redundant  self-closing-void-elements\n  138:4  error  Self-closing a void element is redundant  self-closing-void-elements\n  143:4  error  Self-closing a void element is redundant  self-closing-void-elements\n  146:4  error  Self-closing a void element is redundant  self-closing-void-elements\n  152:56  error  Self-closing a void element is redundant  self-closing-void-elements\n');
  });
  QUnit.test('projet-car/templates/services.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'projet-car/templates/services.hbs should pass TemplateLint.\n\nprojet-car/templates/services.hbs\n  3:0  error  Incorrect indentation for `<h1>` beginning at L3:C0. Expected `<h1>` to be at an indentation of 2 but was found at 0.  block-indentation\n  5:0  error  Incorrect indentation for `<div>` beginning at L5:C0. Expected `<div>` to be at an indentation of 2 but was found at 0.  block-indentation\n  27:0  error  Incorrect indentation for `<div>` beginning at L27:C0. Expected `<div>` to be at an indentation of 2 but was found at 0.  block-indentation\n  47:0  error  Incorrect indentation for `<div>` beginning at L47:C0. Expected `<div>` to be at an indentation of 2 but was found at 0.  block-indentation\n  10:7  error  Incorrect indentation for `Pour ne pas vous ennuyer, vous obtenez un acc\xE8s gratuit \xE0 notre Wi-fi dans le bus pour pouvoir surfer sur\n      internet, chatter avec vos amis et consulter vos e-mails pendant tout le voyage \u2013 le tout \xE0 vitesse 4G ! Avec\n      Travel Cars vous \xEAtes toujours connect\xE9s.\n    ` beginning at L10:C7. Expected `Pour ne pas vous ennuyer, vous obtenez un acc\xE8s gratuit \xE0 notre Wi-fi dans le bus pour pouvoir surfer sur\n      internet, chatter avec vos amis et consulter vos e-mails pendant tout le voyage \u2013 le tout \xE0 vitesse 4G ! Avec\n      Travel Cars vous \xEAtes toujours connect\xE9s.\n    ` to be at an indentation of 6 but was found at 7.  block-indentation\n  22:7  error  Incorrect indentation for `Dans nos cars vous disposez d\u2019une place assise garantie avec beaucoup d\u2019espace pour les jambes.\n    ` beginning at L22:C7. Expected `Dans nos cars vous disposez d\u2019une place assise garantie avec beaucoup d\u2019espace pour les jambes.\n    ` to be at an indentation of 6 but was found at 7.  block-indentation\n  31:7  error  Incorrect indentation for `Chez Travel Cars vous ne manquerez de rien : des boissons et des petits snacks sont disponibles \xE0 bord. Vous\n      pouvez les acheter facilement aupr\xE8s de nos sympathiques chauffeurs.\n    ` beginning at L31:C7. Expected `Chez Travel Cars vous ne manquerez de rien : des boissons et des petits snacks sont disponibles \xE0 bord. Vous\n      pouvez les acheter facilement aupr\xE8s de nos sympathiques chauffeurs.\n    ` to be at an indentation of 6 but was found at 7.  block-indentation\n  39:7  error  Incorrect indentation for `Vous souhaitez surfer sur Internet, chatter ou travailler sur votre ordinateur portable, mais votre batterie est\n      vide ? Recherchez tout simplement les prises indiqu\xE9es par des symboles ou demandez \xE0 nos aimables chauffeurs o\xF9\n      elles se trouvent.\n    ` beginning at L39:C7. Expected `Vous souhaitez surfer sur Internet, chatter ou travailler sur votre ordinateur portable, mais votre batterie est\n      vide ? Recherchez tout simplement les prises indiqu\xE9es par des symboles ou demandez \xE0 nos aimables chauffeurs o\xF9\n      elles se trouvent.\n    ` to be at an indentation of 6 but was found at 7.  block-indentation\n  54:43  error  Incorrect indentation for `p` beginning at L53:C4. Expected `</p>` ending at L54:C43 to be at an indentation of 4 but was found at 39.  block-indentation\n  53:7  error  Incorrect indentation for `Encore quelques minutes avant votre arriv\xE9e ? Aucune raison de s\'inqui\xE9ter ! Tous les Travel Cars sont \xE9quip\xE9s de\n      toilettes pour les cas d\'urgence.` beginning at L53:C7. Expected `Encore quelques minutes avant votre arriv\xE9e ? Aucune raison de s\'inqui\xE9ter ! Tous les Travel Cars sont \xE9quip\xE9s de\n      toilettes pour les cas d\'urgence.` to be at an indentation of 6 but was found at 7.  block-indentation\n  62:40  error  Incorrect indentation for `p` beginning at L60:C4. Expected `</p>` ending at L62:C40 to be at an indentation of 4 but was found at 36.  block-indentation\n  60:7  error  Incorrect indentation for `Avec Travel Cars, vous pouvez emporter \xE9norm\xE9ment de bagages ! Il vous suffit de les stocker en soute puis de\n      profiter du voyage. Nos chauffeurs seront bien s\xFBr heureux de vous aider pour le chargement. Vous trouverez plus\n      d\u2019information dans la rubrique` beginning at L60:C7. Expected `Avec Travel Cars, vous pouvez emporter \xE9norm\xE9ment de bagages ! Il vous suffit de les stocker en soute puis de\n      profiter du voyage. Nos chauffeurs seront bien s\xFBr heureux de vous aider pour le chargement. Vous trouverez plus\n      d\u2019information dans la rubrique` to be at an indentation of 6 but was found at 7.  block-indentation\n');
  });
});
define("projet-car/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/home-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/home-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/changepassword-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/changepassword-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/confirm-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/confirm-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/contact-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/contact-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/home-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/home-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/log-in-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/log-in-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/login-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/organiser-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/organiser-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/services-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/services-test.js should pass ESLint\n\n');
  });
});
define("projet-car/tests/test-helper", ["projet-car/app", "projet-car/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("projet-car/tests/unit/routes/changepassword-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | changepassword', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:changepassword');
      assert.ok(route);
    });
  });
});
define("projet-car/tests/unit/routes/confirm-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | confirm', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:confirm');
      assert.ok(route);
    });
  });
});
define("projet-car/tests/unit/routes/contact-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | contact', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:contact');
      assert.ok(route);
    });
  });
});
define("projet-car/tests/unit/routes/home-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | home', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:home');
      assert.ok(route);
    });
  });
});
define("projet-car/tests/unit/routes/log-in-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | logIn', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:log-in');
      assert.ok(route);
    });
  });
});
define("projet-car/tests/unit/routes/login-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | login', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:login');
      assert.ok(route);
    });
  });
});
define("projet-car/tests/unit/routes/organiser-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | organiser', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:organiser');
      assert.ok(route);
    });
  });
});
define("projet-car/tests/unit/routes/services-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | services', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:services');
      assert.ok(route);
    });
  });
});
define('projet-car/config/environment', [], function() {
  var prefix = 'projet-car';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('projet-car/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
