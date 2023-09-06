export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      statistics: undefined
      newMeal: undefined
      feedback: {
        type: 'good' | 'bad'
      }
      meal: {
        id: string
      }
      editMeal: {
        id: string
      }
    }
  }
}