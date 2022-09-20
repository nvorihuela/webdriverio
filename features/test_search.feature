Feature: Search text Ebay

  Scenario Outline: Search text E-bay and print results

    Given I am on the home page
    When I complete the input search with <text> and search
    Then Print results

    Examples:
      | text |
      |  Pilas|
