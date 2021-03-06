class QuestionAnswerModel {
  constructor(
    questionId,
    respondentId,
    value,
    comment) {
    this.questionId = questionId;
    this.respondentId = respondentId;
    this.value = value;
    this.comment = comment;
  }

  static fromJson(basicAnswerJson) {
    return new QuestionAnswerModel(
      basicAnswerJson.question_id,
      basicAnswerJson.respondent_id,
      basicAnswerJson.value,
      basicAnswerJson.comment
    )
  }
}

export default QuestionAnswerModel;