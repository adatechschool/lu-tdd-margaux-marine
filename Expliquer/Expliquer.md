# Expliquer

Notez ici vos éventuelles notes ou retours de l'encadrante


1) Les differents types de tests (unitaires, d’intégration, de parcours/validation)

# TEST Methode sequentielle :

1. **Test unitaire** vérifie qu'une petite portion du code a bien le comportement attendu. Dans votre projet, par exemple, vous pourriez créer un test unitaire pour vérifier que l'image générée a bien les dimensions adéquates.
2. **Tests d'intégration :** Ils vérifient que les fonctionnalités de l'application s'intègrent bien les unes avec les autres. Il est important de tester que ces "briques" indépendantes fonctionnent bien les unes avec les autres !
3. **Tests de validation :** Les tests de validation sont réalisés par un humain, généralement par un membre de la Maîtrise d'Ouvrage, et vérifient que le projet correspond bien aux attentes du client. Ils sont à placer en parallèle des spécifications fonctionnelles.
4. **Phase de recette :** Réalisée en collaboration étroite avec le client et valide que le logiciel livré correspond bien à ses attentes. Durant cette phase, l'équipe responsable du projet teste les différentes composantes du projet et décèle les derniers bugs avant la mise en ligne.

# TEST Méthode Agile

A l'inverse des méthodologies séquentielles, les méthodologies agiles pensent un projet comme un ensemble de fonctionnalités qui seront affinées au fur et à mesure de la vie du projet. C'est pourquoi les tests ne vont que rarement tester l'intégralité d'un système mais plutôt les fonctionnalités en elles-mêmes et les parcours utilisateurs. Ils sont intégrés aux sprints.

- **Tests fonctionnels**, se concentrent sur une séquence d'opérations complexes, comme le **parcours d'un utilisateur**. Ils vérifient que le logiciel renvoie les informations attendues par l'utilisateur pendant qu'il réalise une action.
- **Tests d'acceptation** : Un test d'acceptation est réalisé par un humain, généralement le client ou son représentant, et valide que la fonctionnalité développée correspond bien à celle qui était attendue. Le client donne ses retours ou valide la fonctionnalité.


2) Qu’est ce que le code coverage?
La couverture de code (en anglais code coverage) est une mesure utilisée en génie logiciel pour décrire le taux de code source testé d'un programme. Ceci permet de mesurer la qualité des tests effectués.

La mesure de ce taux implique souvent l'utilisation de tests unitaires.

3) Qu’est ce que le TDD
Test driven dev invente par Kent Beck, le créateur de la méthodologie de projet agile Extreme Programming en 2000. C'est une methodologie selon laquelle il faut écrire un test en premier. Puis le ou la développeur·se ajoute le code source qui permet de le valider.

Avantages :

- **Temps de débogage réduit** : Vous passez moins de temps à déboguer car votre code est testé en détail,
- **Confiance** : Vous gagnez en confiance et en flexibilité.
- **Documentation** : Vos tests deviennent votre documentation et il est plus facile pour d'autres développeurs de l'utiliser,
- **Design** : Votre code s'améliore car il devient plus modulaire et facile à tester.

## 3 PHASES

- **🔴 Red** : Ecrire un test unitaire puis le lancer. Evidemment, il échoue.
- **✅ Green** : Ecrire le code source qui permet de faire passer le test.
- **🛠 Refactor** : Améliorer le code source.

4) A quoi doit répondre un test unitaire (F.I.R.S.T.)

**Fast** : if we don’t keep tests fast, we will discard and lose them
**Independent** :  tests should not depend on each other in order to prevent a single failing test to cause a succession of other failing tests.
**Repeatable** : tests should be repeatable in any conditions / environments such as production environnement, QA environnement, no network, or different day, place, time…
**Self-Validating** : We should not go through a log file or compare data to know if they pass.
**Timely** : Testing should not be done at the end because otherwise it does not gives choice to programmers.