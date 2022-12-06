export const response = {
  response_code: 0,
  response_message: 'Token Generated Successfully!',
  token: 'e2138becd93752489bc9b100f2fc53b05ce4ac5df8dafc8402611e15149ef02f',
};

export const responseInvalid = {
  "response_code":3,
  "results":[]
}
export const responseValid = {
  response_code: 0,
  results: [
    {
      category: 'Entertainment: Music',
      type: 'boolean',
      difficulty: 'easy',
      question: 'American rapper Dr. Dre actually has a Ph.D. doctorate.',
      correct_answer: 'False',
      incorrect_answers: [
        'True'
      ]
    },
    {
      category: 'Entertainment: Music',
      type: 'multiple',
      difficulty: 'easy',
      question: 'Who is the lead singer of Green Day?',
      correct_answer: 'Billie Joe Armstrong',
      incorrect_answers: [
        'Mike Dirnt',
        'Sean Hughes',
        'Tr&eacute; Cool'
      ]
    },
    {
      category: 'Entertainment: Video Games',
      type: 'multiple',
      difficulty: 'hard',
      question: 'What was the first &quot;Call Of Duty: Zombies&quot; map to be directed by Jason Blundell?',
      correct_answer: 'Mob Of The Dead',
      incorrect_answers: [
        'Buried',
        'Origins',
        'Moon'
      ]
    },
    {
      category: 'Entertainment: Television',
      type: 'multiple',
      difficulty: 'hard',
      question: 'What was the name of the inflatable duck sacrified to the crowd at the end of Episode 34 of the 18th season of Big Brother?',
      correct_answer: 'Pablo',
      incorrect_answers: [
        'Esteban',
        'Carlos',
        'Duckster'
      ]
    },
    {
      category: 'Entertainment: Japanese Anime & Manga',
      type: 'multiple',
      difficulty: 'medium',
      question: 'How does the character Dragowizard, Qinus Axia&#039;s from the anime &quot;Buddyfight&quot; differ between the Japanese and English dubs?',
      correct_answer: 'Different Gender',
      incorrect_answers: [
        'Different Body Proportions',
        'Different Backstory',
        'Different Appearance'
      ]
    }
  ]
}
