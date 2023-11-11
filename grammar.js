/**
 * @file AML (Acorn Markup Language) grammar for tree-sitter
 * @see {@link https://github.com/acorn-io/aml|official syntax spec}
 */

module.exports = grammar({
  name: 'aml',

  rules: {
    // TODO(njhale): add the actual grammar rules
    source_file: $ => 'hello'
  }
})
