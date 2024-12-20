<?php

/*
 * This file is part of fof/best-answer.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\BestAnswer\Api;

use Flarum\Api\Serializer\DiscussionSerializer;
use Flarum\Discussion\Discussion;
use FoF\BestAnswer\Repository\BestAnswerRepository;

class DiscussionAttributes
{
    /**
     * @var BestAnswerRepository
     */
    protected $bestAnswerRepository;

    public function __construct(BestAnswerRepository $bestAnswerRepository)
    {
        $this->bestAnswerRepository = $bestAnswerRepository;
    }

    public function __invoke(DiscussionSerializer $serializer, Discussion $discussion, array $attributes): array
    {
        $attributes['canSelectBestAnswer'] = $this->bestAnswerRepository->canSelectBestAnswer($serializer->getActor(), $discussion);

        return $attributes;
    }
}
