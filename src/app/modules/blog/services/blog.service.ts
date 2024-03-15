import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  getBlogsArray () {
    return [
      {
        id: 1,
        title: 'What Chynna Wears',
        description: 'Fashion and Lifestyle Blog',
        author: 'Chynna Beverly Lim',
        comments: ['Best source of fashion tips!', 'Good recommendations']
      },
      {
        id: 2,
        title: 'SKY Family',
        description: 'Fashion, Family, and Lifestyle',
        author: 'Kryz Uy',
        comments: ['Great tips for first time moms', 'Entertaining']
      },
      {
        id: 3,
        title: 'Lena Lifts',
        description: 'Wellness, Self-Improvement, and Fitness',
        author: 'Lena Yeo',
        comments: ['Perfect for young adults']
      },
      {
        id: 4,
        title: 'Fitness with Jason and Lauren Pak',
        description: 'Mobility, Athleticism, Fitness Resource',
        author: 'Jason Pak',
        comments: ['Has workout plan for mobility']
      },
      {
        id: 5,
        title: 'Little Puffy',
        description: 'Travel, Fashion, Living Alone Series',
        author: 'Michelle Choi',
        comments: ['Great resource for Korean Itenirary']
      },
    ]
  }
}